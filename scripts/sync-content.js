const fs = require("fs");
const path = require("path");
const { buildGeminiPrompt, pickBackupArticle, getAllPaths, humanizeContent } = require("./keyword-utils");

const CF_ACCOUNT_ID = "6b7c6e17c84b141e12bb8cae44579ca3";
const CF_KV_NAMESPACE_ID = "535c3b6d9bab4acfa5445e9ad854aec4";
const INDEXNOW_KEY = "1123858585";
const ARTICLES_PER_RUN = Number(process.env.ARTICLES_PER_RUN || 2);

const DOMAINS = (process.env.DOMAINS || `mixdvr.com kuailian--1.com kuailian-app.cc kuailian-pc.vip kuailian-cn.vip kuai-lian.xyz ardlervillagetrust.org todayscatholicpueblo.org reviewbooking.com perfectxml.com booking365.net njreporter.org test-deepseek.com forum-deepseek.com aideep-seek.icu deepseek-cn.vip deepseek-v4.it.com`).split(/\s+/).filter(Boolean);

const BASE_PATHS = [
  "/soft/kuailian-v2.8.5.html","/soft/kuailian-v2.8.6.html","/soft/kuailian-v2.8.7.html",
  "/soft/kuailian-v2.9.0.html","/soft/kuailian-v2.9.1.html",
  "/soft/letsvpn-v4.1.2.html","/soft/letsvpn-v4.1.5.html","/soft/letsvpn-v4.2.0.html","/soft/letsvpn-v4.2.1.html",
  "/download/kuailian-ios-latest.html","/download/kuailian-android-apk.html","/download/kuailian-harmony-apk.html",
  "/download/kuailian-windows-setup.html","/download/kuailian-mac-os.html","/download/kuailian-linux-client.html",
  "/download/letsvpn-official-client.html","/download/letsvpn-apk-latest.html",
  "/review/kuailian-speed-test.html","/review/kuailian-ping-test.html","/review/kuailian-latency-benchmark.html",
  "/review/letsvpn-stability-2026.html","/review/letsvpn-udp-stability.html","/review/kuailian-gaming-acceleration.html",
  "/review/letsvpn-performance-report.html","/review/kuailian-streaming-test.html",
  "/setup/how-to-install-kuailian-android.html","/setup/how-to-install-kuailian-ios.html",
  "/setup/letsvpn-windows-configuration.html","/setup/kuailian-router-tutorial.html","/setup/letsvpn-mac-proxy-guide.html",
  "/setup/kuailian-firewall-rules.html","/setup/letsvpn-dns-config.html","/setup/kuailian-enterprise-deploy.html",
  "/news/kuailian-update-2026.html","/news/letsvpn-latest-nodes-announcement.html","/news/kuailian-network-optimization-log.html",
  "/news/letsvpn-security-upgrade-notice.html","/news/kuailian-global-backbone-抖动处理.html",
  "/news/kuailian-node-expansion-2026.html","/news/letsvpn-protocol-upgrade.html","/news/kuailian-maintenance-log.html",
  "/app/kuailian-free-download.html","/app/letsvpn-pure-version.html","/app/kuailian-official-分发中心.html",
  "/app/letsvpn-download-link-2026.html","/app/kuailian-cross-platform-terminal.html",
  "/app/kuailian-lite-version.html","/app/letsvpn-enterprise-edition.html",
  "/guide/kuailian-first-run.html","/guide/letsvpn-troubleshooting.html"
];

const PATHS = getAllPaths(BASE_PATHS);

function readGeminiKey() {
  const keyFile = path.join(__dirname, "..", "..", "密钥.txt");
  if (!fs.existsSync(keyFile)) throw new Error("密钥.txt not found");
  const m = fs.readFileSync(keyFile, "utf8").match(/AIza[0-9A-Za-z_-]+/);
  if (!m) throw new Error("GEMINI_API_KEY not found");
  return m[0];
}

function readCfToken() {
  const cfg = path.join(process.env.USERPROFILE || "", ".wrangler", "config", "default.toml");
  const raw = fs.readFileSync(cfg, "utf8");
  const m = raw.match(/oauth_token = "(.*)"/);
  if (!m) throw new Error("CF token not found");
  return m[1];
}

const GEMINI_API_KEY = readGeminiKey();
const CF_TOKEN = readCfToken();

function enrichArticle(article, p, domain, slot) {
  const today = new Date().toISOString().split("T")[0];
  const types = ["tutorial", "review", "faq", "news"];
  const authors = ["编辑部", "技术组", "小李", "评测君", "运维笔记"];
  const seed = Math.abs(require("./keyword-utils").hashCode(`${p}|${domain}|meta|${slot}`));
  return {
    title: String(article.title || "").trim(),
    content: humanizeContent(String(article.content || "").trim()),
    author: article.author || authors[seed % authors.length],
    articleType: article.articleType || types[seed % types.length],
    publishedAt: article.publishedAt || today,
    updatedAt: today
  };
}

function encodeKey(key) {
  return encodeURIComponent(key);
}

async function kvHasContent(key) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${encodeKey(key)}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${CF_TOKEN}` } });
  return res.status === 200;
}

async function kvPut(key, jsonObj) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${encodeKey(key)}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { Authorization: `Bearer ${CF_TOKEN}`, "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(jsonObj)
  });
  const data = await res.json();
  if (!data.success) throw new Error(`KV write failed: ${key}`);
}

async function geminiContent(p, domain, slot) {
  const prompt = buildGeminiPrompt(p, domain, slot);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      if (res.status === 429 || res.status === 503) {
        await new Promise(r => setTimeout(r, 5000));
        continue;
      }
      const data = await res.json();
      let text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
      text = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
      const parsed = JSON.parse(text);
      if (parsed.title && parsed.content) return { title: String(parsed.title), content: String(parsed.content) };
    } catch (e) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  return pickBackupArticle(p, domain, slot);
}

async function pickPaths(domain, slot) {
  const picked = [];
  const dayIndex = Math.floor((Date.now() / 86400000 + 719528) % 365) || new Date().getUTCDate();
  const base = (dayIndex * 15 + slot * ARTICLES_PER_RUN) % PATHS.length;

  for (let j = 0; j < 12 && picked.length < ARTICLES_PER_RUN; j++) {
    const p = PATHS[(base + j) % PATHS.length];
    const key = `content_${domain}_${p}`;
    if (!(await kvHasContent(key)) && !picked.includes(p)) picked.push(p);
  }

  for (let j = 0; j < PATHS.length && picked.length < ARTICLES_PER_RUN; j++) {
    const p = PATHS[(base + picked.length + j) % PATHS.length];
    if (!picked.includes(p)) picked.push(p);
  }

  return picked;
}

async function indexNow(domain, urls) {
  await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: domain,
      key: INDEXNOW_KEY,
      keyLocation: `https://${domain}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    })
  });
}

async function main() {
  const utcHour = new Date().getUTCHours();
  const slotMap = { 0: 0, 12: 1 };
  const slot = slotMap[utcHour] ?? (new Date().getUTCDate() % 2);

  console.log(`=== Content Sync Start | domains=${DOMAINS.length} | per domain=${ARTICLES_PER_RUN} | slot=${slot} | paths=${PATHS.length} ===`);

  for (const domain of DOMAINS) {
    console.log(`\n--- ${domain} ---`);
    const paths = await pickPaths(domain, slot);
    const urls = [];

    for (const p of paths) {
      console.log(`Generating https://${domain}${p}`);
      const raw = await geminiContent(p, domain, slot);
      const content = enrichArticle(raw, p, domain, slot);
      const kvKey = `content_${domain}_${p}`;
      await kvPut(kvKey, content);
      urls.push(`https://${domain}${p}`);
      await new Promise(r => setTimeout(r, 1000));
    }

    if (urls.length) {
      try {
        await indexNow(domain, urls);
        console.log(`IndexNow: ${urls.length} urls`);
      } catch (e) {
        console.log(`IndexNow warning: ${e.message}`);
      }
    }
  }

  console.log("\n=== Content Sync Done ===");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
