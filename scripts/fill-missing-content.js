#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { getAllPaths, pickBackupArticle, hashCode, humanizeContent } = require("./keyword-utils");
const { kvGetValue, kvDeleteValue, parseArticleMeta, contentKvKey, sitemapCacheKey } = require("./kv-api");

const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID || "6b7c6e17c84b141e12bb8cae44579ca3";
const CF_KV_NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID || "535c3b6d9bab4acfa5445e9ad854aec4";
const INDEXNOW_KEY = process.env.BING_INDEXNOW_KEY || "1123858585";
const ENABLE_INDEXNOW = String(process.env.ENABLE_INDEXNOW || "true").toLowerCase() === "true";
const LIMIT_PER_DOMAIN = Number(process.env.LIMIT_PER_DOMAIN || 0);

const DEFAULT_DOMAINS = [
  "mixdvr.com",
  "kuailian--1.com",
  "kuailian-app.cc",
  "kuailian-pc.vip",
  "kuailian-cn.vip",
  "kuai-lian.xyz",
  "ardlervillagetrust.org",
  "todayscatholicpueblo.org",
  "reviewbooking.com",
  "perfectxml.com",
  "booking365.net",
  "njreporter.org",
  "test-deepseek.com",
  "forum-deepseek.com",
  "aideep-seek.icu",
  "deepseek-cn.vip",
  "deepseek-v4.it.com"
];

const BASE_PATHS = [
  "/soft/kuailian-v2.8.5.html", "/soft/kuailian-v2.8.6.html", "/soft/kuailian-v2.8.7.html",
  "/soft/kuailian-v2.9.0.html", "/soft/kuailian-v2.9.1.html",
  "/soft/letsvpn-v4.1.2.html", "/soft/letsvpn-v4.1.5.html", "/soft/letsvpn-v4.2.0.html", "/soft/letsvpn-v4.2.1.html",
  "/download/kuailian-ios-latest.html", "/download/kuailian-android-apk.html", "/download/kuailian-harmony-apk.html",
  "/download/kuailian-windows-setup.html", "/download/kuailian-mac-os.html", "/download/kuailian-linux-client.html",
  "/download/letsvpn-official-client.html", "/download/letsvpn-apk-latest.html",
  "/review/kuailian-speed-test.html", "/review/kuailian-ping-test.html", "/review/kuailian-latency-benchmark.html",
  "/review/letsvpn-stability-2026.html", "/review/letsvpn-udp-stability.html", "/review/kuailian-gaming-acceleration.html",
  "/review/letsvpn-performance-report.html", "/review/kuailian-streaming-test.html",
  "/setup/how-to-install-kuailian-android.html", "/setup/how-to-install-kuailian-ios.html",
  "/setup/letsvpn-windows-configuration.html", "/setup/kuailian-router-tutorial.html", "/setup/letsvpn-mac-proxy-guide.html",
  "/setup/kuailian-firewall-rules.html", "/setup/letsvpn-dns-config.html", "/setup/kuailian-enterprise-deploy.html",
  "/news/kuailian-update-2026.html", "/news/letsvpn-latest-nodes-announcement.html", "/news/kuailian-network-optimization-log.html",
  "/news/letsvpn-security-upgrade-notice.html", "/news/kuailian-global-backbone-抖动处理.html",
  "/news/kuailian-node-expansion-2026.html", "/news/letsvpn-protocol-upgrade.html", "/news/kuailian-maintenance-log.html",
  "/app/kuailian-free-download.html", "/app/letsvpn-pure-version.html", "/app/kuailian-official-分发中心.html",
  "/app/letsvpn-download-link-2026.html", "/app/kuailian-cross-platform-terminal.html",
  "/app/kuailian-lite-version.html", "/app/letsvpn-enterprise-edition.html",
  "/guide/kuailian-first-run.html", "/guide/letsvpn-troubleshooting.html"
];

function readCfToken() {
  if (process.env.CF_API_TOKEN) return process.env.CF_API_TOKEN;
  const cfg = path.join(process.env.USERPROFILE || "", ".wrangler", "config", "default.toml");
  const raw = fs.readFileSync(cfg, "utf8");
  const match = raw.match(/oauth_token = "(.*)"/);
  if (!match) throw new Error("CF_API_TOKEN not found");
  return match[1];
}

function parseDomains(raw) {
  if (!raw) return DEFAULT_DOMAINS;
  return raw
    .split(/[\s,]+/)
    .map(item => item.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/.*$/, ""))
    .filter(Boolean);
}

function enrichArticle(article, pagePath, domain, slot) {
  const today = new Date().toISOString().split("T")[0];
  const types = ["tutorial", "review", "faq", "news"];
  const authors = ["编辑部", "技术组", "小李", "评测君", "运维笔记"];
  const seed = Math.abs(hashCode(`${pagePath}|${domain}|meta|${slot}`));

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

async function kvPut(token, key, jsonObj) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/storage/kv/namespaces/${CF_KV_NAMESPACE_ID}/values/${encodeKey(key)}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(jsonObj)
  });
  const data = await res.json();
  if (!data.success) throw new Error(`KV write failed: ${key} ${JSON.stringify(data.errors || [])}`);
}

async function indexNow(domain, urls) {
  if (!ENABLE_INDEXNOW || urls.length === 0) return;
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
  const token = readCfToken();
  const domains = parseDomains(process.env.DOMAINS || process.env.TARGET_DOMAINS || "");
  const paths = getAllPaths(BASE_PATHS);
  let totalFilled = 0;

  console.log(`Fill missing content start | domains=${domains.length} | paths=${paths.length} | limit=${LIMIT_PER_DOMAIN || "none"}`);

  for (const domain of domains) {
    let filled = 0;
    let existing = 0;
    const urls = [];
    console.log(`\n--- ${domain} ---`);

    for (const pagePath of paths) {
      const key = contentKvKey(domain, pagePath);
      const raw = await kvGetValue(CF_ACCOUNT_ID, CF_KV_NAMESPACE_ID, token, key);
      if (parseArticleMeta(raw)) {
        existing += 1;
        continue;
      }

      if (LIMIT_PER_DOMAIN > 0 && filled >= LIMIT_PER_DOMAIN) continue;

      const slot = String((filled + existing) % 2);
      const article = enrichArticle(pickBackupArticle(pagePath, domain, slot), pagePath, domain, slot);
      await kvPut(token, key, article);
      urls.push(`https://${domain}${pagePath}`);
      filled += 1;
      totalFilled += 1;
      console.log(`filled ${pagePath}`);
    }

    if (filled > 0) {
      await kvDeleteValue(CF_ACCOUNT_ID, CF_KV_NAMESPACE_ID, token, sitemapCacheKey(domain));
      await indexNow(domain, [`https://${domain}/`, ...urls]);
    }

    console.log(`done ${domain} | existing=${existing} | filled=${filled} | total=${existing + filled}/${paths.length}`);
  }

  console.log(`\nFill missing content done | total filled=${totalFilled}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
