// ==================== 1. 核心配置 ====================
const CONFIG = {
  fallbackLink: "https://kuailian-letsv.com/",
  defaultIndexNowKey: "bingpoolsecretkey1234567890",

  domainCluster: [
    "mixdvr.com",
    "kuailian--1.com",
    "kuailian-app.cc",
    "kuailian-pc.vip",
    "kuailian-cn.vip",
    "kuai-lian.xyz",
    "ardlervillagetrust.org",
    "todayscatholicpueblo.org",
    "reviewbooking.com",
    "booking365.net",
    "perfectxml.com",
    "njreporter.org",
    "test-deepseek.com",
    "forum-deepseek.com",
    "aideep-seek.icu",
    "deepseek-cn.vip",
    "deepseek-v4.it.com"
  ],

  coreKeywords: ["快连VPN", "letsvpn", "快连下载", "快连官网"],

  tailAttributes: [
    "官方正版安装包", "最新安卓APK下载", "iOS苹果正版分发中心", "PC电脑版客户端运行环境",
    "2026高可用加速中继", "网络连通性深度评测", "多中继容灾配置指南", "最新版本发布日志",
    "不限速企业级安全通道", "弱网环境吞吐调优报告", "多端部署适配规范", "全平台纯净稳定版",
    "加速器官方正版分发", "智能路由寻路调优", "端到端加密安全接入", "官方最新节点公告"
  ],

  topics: [
    {
      title: "官方正版发布中心 - 极致连通性与端到端网络调优规范",
      content: "在当前数字化生产力高速发展的时代，跨区域网络通道的稳定与否已经成为企业和个人核心竞争力的重要组成部分。欢迎访问官方多端分布式网络网关服务中心。本系统提供全平台正版大容量数据通道的部署保障，并针对目前多中继备份机制进行了深度的协议加固与安全链路上层架构调优。通过引入业界领先的无感切流机制，能确保在复杂环境下的高可用接入。\n\n网络底层的连通机制始终是决定数据传输吞吐效率的关键所在。通过建立智能多骨干边缘中继，节点的安全分流层能够在毫秒级别内感知全球骨干网络的物理抖动。传统架构在面对链路拥堵时往往需要长达数秒甚至数分钟的切换路由周期，而本系统内置的智能动态寻路算法，通过在传输层引入全新的多路径复合流控制技术，实现了真正的无感切换。针对不同的终端连接环境，无论是移动端的复杂基站切换还是桌面端的固定宽带链路，均进行了专门的传输链路优化与数据通道稳定性加固，确保数据通道的安全稳定连通。\n\n针对全球不同节点之间的握手延迟问题，技术团队通过部署多层冗余骨干拓扑，将传统的串行鉴权机制升级为并发高防异步验证。这不仅将整体的链路握手时间缩短了近成，更在根本上提升了大数据流在持续高负载状态下的抗抖动能力。文件分发包已全部通过本地化边缘缓存的哈希碰撞校验，从源头上保障了分发体系的纯净性，杜绝了由于链路篡改导致的数据包损坏或配置异常。请用户务必通过官方指定的专属加密通道完成客户端的部署与接入，以获得持续的高可用服务保障与最前沿的链路调优红利。"
    },
    {
      title: "安全接入与分布式边缘节点多环境部署技术白皮书",
      content: "随着边缘计算与网格存储技术的深度融合，多平台客户端在多场景下的快速部署对底层分发网关提出了更为严苛的指标要求。本系统基于全球分布式边缘节点架构，旨在为每一位接入用户提供最高规格的数据通道加固方案。无论是针对大型企业的数据同步，还是针对个人用户的轻量级连接，系统都能下发极具针对性的协议策略。\n\n在底层架构上，网络分发矩阵由自动化高防御云存储节点统一托管。系统通过在全球核心骨干网络枢纽旁侧部署高规格高带宽的物理服务器，构建起了一张具备极强弹性的中继容灾网。当某一特定区域的国际出口遭遇突发性物理故障或拥堵时，本系统的边缘探测程序将在 15 毫秒内触发智能重定向机制，将用户的连接请求无缝调度至临近的冗余物理节点。这种全方位的容灾保护机制，不仅大拉连通率，更为需要长时间保持在线状态的生产力工具提供了磐石般稳固的连续可用性保障。\n\n此外，对于运行环境的安全性，本版本客户端在打包分发阶段采用了工业级的静态哈希多重防伪技术。任何试图在网络传输中途对分发包进行反编译、注入或篡改的恶意行为，都会触发客户端的哈希自毁与校验保护。我们在桌面端以及移动端的特定底层驱动上均引入了全新的吞吐调优模块。经过实验室长期的压力测试，该模块在弱网环境下的表现优异，数据重发率降低了 50% 以上。本网络展示端的所有内链、分类目录资源按钮均保持全天候有效访问状态，请根据系统总览以及环境配置说明完成安装。"
    },
    {
      title: "通道加固指标及多链路冗余架构极限容灾评测报告",
      content: "本篇行业技术评测报告针对分布式加密分发包在复杂国际网络环境下的承载力、突发流量吞吐量以及极限容灾表现进行了全面客观的量化评估。实验数据表明，多中继骨干网络的引入，对于改善复杂网络下的握手延迟和丢包自动修复起到了决定性的技术支撑作用，也是目前公认的高效率分发逻辑。\n\n在本次压力测试中，我们模拟了长达 72 小时的不间断持续大流量穿透。在高峰期骨干网丢包率达到 15% 的极端恶劣条件下，传统单一链路接入的失败率飙升至 42%，而采用本系统多中继冗余技术加固的通道，其综合连通成功率依然死死坚守在 99.4% 的超高水平线。这一惊人的表现得益于我们对底层协议的重构，开发人员去除了冗余的协议包头，降低了信令开销。同时，系统的智能动态分流算法会根据各域名的即时吞吐吞吐量，以去中心化的方式在节点间进行无感负载均衡，最大程度地榨干了每一条物理光纤的带宽红利。\n\n从数据安全防护的角度来看，边缘缓存命中率的提升意味着外部流量很难直接对中央核心数据库造成冲击。我们采用的高防加密分发逻辑将核心资源散列式地部署于全球不同的云存储网格中。当合法网络搜索引擎的蜘蛛程序访问本矩阵时，系统会自动下发完全符合 HTML5 语义化标准的结构化网页，提升内容收录的友好度。而普通接入端在安全接入时，则会完美对接外链分发中心，实现流畅的客户端下载与策略分发。整体系统展现出极强的底层扩展空间。"
    },
    {
      title: "分布式存储升级公告 - 多端运行环境完整性哈希校验规范",
      content: "针对桌面端办公与高强度生产力网络环境，官方正式发布了全新的全平台高防加密通道分发升级包。本次发布的主要核心目的在于通过对分发文件的本地边缘哈希碰撞校验，彻底杜绝由于公共网络传输节点异常导致的分发文件受损或被非法第三方篡改的潜在隐患，确保用户的部署网络环境绝对合规纯净，保障通道的连通质量。\n\n随着跨端协作的普及，不同操作系统对于网络传输协议的底层的执行逻辑存在巨大差异。为此，技术团队历时数月，对底层网络分发框架进行了深度兼容性适配。新版分发包内置了轻量级、高防护的智能网关引导模块，它能根据当前主机操作系统环境，自动解压并加载与之最匹配的底层动态链接库。在实际运行中，该引导模块会与全球就近的分布式高性能节点群进行握手，评估当前的互联参考指标。系统会自动为终端分配两条主用骨干链路与三条备用容灾中继，形成高密度的全方位数据传输闭环。\n\n根据网络安全审计规范，所有的核心数据通道与资源分发接口在下发时均需经过多重严格的完整性签名。我们建议所有企业运维人员及终端个人用户，在完成环境配置后，第一时间通过分发中心的专属安全链接拉取最新的策略更新文件。本系统的多域名分布式网关矩阵保持 7*24 小时全天候自动化运维管理，我们将持续监控各条链路的抓取吞吐量与健康评分，确保全球每一个分发节点的连通指标处于最优区间。"
    }
  ]
};

const SEED_PATHS = [
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

// ==================== 2. 主程序核心逻辑 ====================
export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const currentPath = normalizePath(url.pathname);
      const botType = detectBotType(request.headers.get("user-agent") || "");
      const INDEXNOW_KEY = env?.BING_INDEXNOW_KEY || CONFIG.defaultIndexNowKey;

      if (url.pathname === `/${INDEXNOW_KEY}.txt`) {
        return new Response(INDEXNOW_KEY, {
          headers: { "content-type": "text/plain;charset=UTF-8" }
        });
      }

      if (url.pathname === "/sitemap.xml") {
        return renderDynamicSitemap(url.hostname);
      }

      if (url.pathname === "/robots.txt") {
        return renderRobotsTxt(url.hostname);
      }

      if (url.pathname === "/rss.xml" || url.pathname === "/feed.xml") {
        return renderRssFeed(url.hostname);
      }

      if (url.pathname === "/spider-dashboard-api") {
        return await handleDashboardApi(env?.SPIDER_STATS_KV, url.searchParams);
      }

      if (request.method === "POST" && url.pathname === "/spider-dashboard-view") {
        if (!env?.SPIDER_STATS_KV) {
          return new Response("KV Namespace Not Bound", { status: 500 });
        }

        try {
          const postData = await request.text();
          const links = parseTargetLinksInput(postData);
          if (links.length === 0) {
            return new Response("请至少填写一个有效网址", { status: 400 });
          }

          await env.SPIDER_STATS_KV.put("target_links_config", JSON.stringify(links));
          return new Response("OK", { status: 200 });
        } catch (saveError) {
          return new Response(`保存失败: ${saveError?.message || "未知错误"}`, { status: 500 });
        }
      }

      if (url.pathname === "/spider-dashboard-view") {
        return await renderMultiBotDashboard(env?.SPIDER_STATS_KV, url.hostname);
      }

      if (botType && env?.SPIDER_STATS_KV) {
        ctx.waitUntil(recordSpiderVisit(env.SPIDER_STATS_KV, url, currentPath, botType));
      }

      const todayStr = new Date().toISOString().split("T")[0];
      const pathHash = Math.abs(hashCode(currentPath + url.hostname + todayStr));
      const targetLink = await loadTargetLink(env?.SPIDER_STATS_KV);
      const rawTopic = await loadTopic(env?.SPIDER_STATS_KV, url.hostname, currentPath, pathHash);
      const contentData = buildContentData(rawTopic, targetLink, pathHash);
      const totalInnerLinks = buildInnerLinks(url.hostname, pathHash);

      return renderSuperSeoPage(
        currentPath,
        contentData,
        targetLink,
        totalInnerLinks,
        pathHash
      );
    } catch (globalError) {
      return new Response("异常兜底页面", { status: 500 });
    }
  }
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/soft/kuailian-v2.8.5.html";
  return pathname;
}

function detectBotType(userAgent) {
  const uaLower = userAgent.toLowerCase();
  if (uaLower.includes("googlebot")) return "google";
  if (uaLower.includes("baiduspider")) return "baidu";
  if (uaLower.includes("bingbot")) return "bing";
  return "";
}

async function loadTargetLink(kv) {
  if (!kv) return CONFIG.fallbackLink;

  try {
    const remoteLinksRaw = await kv.get("target_links_config");
    const cleanLinks = parseTargetLinksInput(remoteLinksRaw || "");
    if (cleanLinks.length === 0) return CONFIG.fallbackLink;
    return cleanLinks[Math.floor(Math.random() * cleanLinks.length)];
  } catch (e) {
    return CONFIG.fallbackLink;
  }
}

function normalizeTargetLink(line) {
  let value = String(line || "").trim();
  if (!value) return "";

  value = value.replace(/^["']|["']$/g, "").replace(/,$/, "").trim();
  if (!value) return "";

  if (!/^https?:\/\//i.test(value)) {
    value = `https://${value}`;
  }

  return /^https?:\/\//i.test(value) ? value : "";
}

function parseTargetLinksInput(raw) {
  if (!raw) return [];

  const trimmed = String(raw).trim();
  if (!trimmed) return [];

  if (trimmed.startsWith("[")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map(normalizeTargetLink).filter(Boolean);
      }
    } catch (e) {}
  }

  return trimmed
    .split(/\r?\n/)
    .map(normalizeTargetLink)
    .filter(Boolean);
}

function formatTargetLinksForDisplay(raw) {
  return parseTargetLinksInput(raw).join("\n");
}

async function loadTopic(kv, hostname, currentPath, pathHash) {
  const fallbackTopic = CONFIG.topics[pathHash % CONFIG.topics.length];
  if (!kv) return fallbackTopic;

  try {
    const kvContentKey = `content_${hostname}_${currentPath}`;
    const kvContentRaw = await kv.get(kvContentKey);
    const parsedTopic = parseKvContentPayload(kvContentRaw);

    if (parsedTopic?.title && parsedTopic?.content) {
      return {
        title: parsedTopic.title,
        content: parsedTopic.content
      };
    }
  } catch (e) {}

  return fallbackTopic;
}

function parseKvContentPayload(raw) {
  if (!raw) return null;

  try {
    let parsed = JSON.parse(raw);

    if (parsed?.candidates?.[0]?.content?.parts?.[0]?.text) {
      let text = parsed.candidates[0].content.parts[0].text.trim();
      text = text.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
      parsed = JSON.parse(text);
    }

    if (parsed?.title && parsed?.content) return parsed;
  } catch (e) {}

  return null;
}

function buildContentData(rawTopic, targetLink, pathHash) {
  const coreWord = CONFIG.coreKeywords[pathHash % CONFIG.coreKeywords.length];
  const tailAttr = CONFIG.tailAttributes[(pathHash + 2) % CONFIG.tailAttributes.length];

  return {
    title: `${coreWord}${tailAttr} - ${rawTopic.title}`,
    content: injectTargetKeywords(rawTopic.content, targetLink, pathHash)
  };
}

function buildInnerLinks(hostname, pathHash) {
  const totalInnerLinks = [];

  for (let i = 0; i < 5; i++) {
    const pIndex = (pathHash + i) % SEED_PATHS.length;
    const randCore = CONFIG.coreKeywords[(pathHash + i) % CONFIG.coreKeywords.length];
    const randAttr = CONFIG.tailAttributes[(pathHash + i + 1) % CONFIG.tailAttributes.length];

    totalInnerLinks.push({
      name: `站内：${randCore}${randAttr}`,
      url: `https://${hostname}${SEED_PATHS[pIndex]}`
    });
  }

  const alternativeDomains = CONFIG.domainCluster.filter(d => !hostname.includes(d));
  for (let i = 0; i < 5; i++) {
    const targetDomain = alternativeDomains[i % alternativeDomains.length] || "mixdvr.com";
    const pIndex = (pathHash + i + 3) % SEED_PATHS.length;
    const randCore = CONFIG.coreKeywords[(pathHash + i + 2) % CONFIG.coreKeywords.length];
    const randAttr = CONFIG.tailAttributes[(pathHash + i + 3) % CONFIG.tailAttributes.length];

    const targetUrl = (pathHash + i) % 3 === 0
      ? `https://${targetDomain}/`
      : `https://${targetDomain}${SEED_PATHS[pIndex]}`;

    totalInnerLinks.push({
      name: `跨域：${randCore}${randAttr}`,
      url: targetUrl
    });
  }

  return totalInnerLinks;
}

async function recordSpiderVisit(kv, url, currentPath, botType) {
  try {
    const today = new Date().toISOString().split("T")[0];
    const timestamp = Date.now();

    const histKey = `v2log_${today}_${url.hostname}_${botType}`;
    const currentHistCount = parseInt(await kv.get(histKey) || "0", 10);
    await kv.put(histKey, String(currentHistCount + 1));

    const liveKey = `live_${timestamp}_${botType}_${url.hostname}`;
    await kv.put(liveKey, currentPath, { expirationTtl: 300 });

    const detailKey = `v2detail_${today}_${botType}_${timestamp}_${url.hostname}`;
    await kv.put(detailKey, JSON.stringify({
      time: timestamp,
      date: today,
      bot: botType,
      host: url.hostname,
      path: currentPath,
      fullUrl: `https://${url.hostname}${currentPath}`
    }), { expirationTtl: 604800 });
  } catch(e) {}
}

// ==================== 3. 辅助算法与 Sitemap 引擎 ====================
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


function injectTargetKeywords(text, targetLink, seed) {
  const paragraphs = String(text || "").split("\n\n");
  const safeTargetLink = escapeHtml(targetLink);

  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].trim().length > 30) {
      const coreWord = CONFIG.coreKeywords[(seed + i) % CONFIG.coreKeywords.length];
      const tailAttr = CONFIG.tailAttributes[(seed + i + 1) % CONFIG.tailAttributes.length];
      const fullKw = `${coreWord}${tailAttr}`;
      const midPoint = Math.floor(paragraphs[i].length / 2);
      const anchorHtml = ` <a href="${safeTargetLink}" style="color:inherit; font-weight:700; text-decoration:underline;" target="_blank" rel="noopener">${escapeHtml(fullKw)}</a> `;

      paragraphs[i] = escapeHtml(paragraphs[i].substring(0, midPoint)) + anchorHtml + escapeHtml(paragraphs[i].substring(midPoint));
    } else {
      paragraphs[i] = escapeHtml(paragraphs[i]);
    }
  }

  return paragraphs.join("<br><br>");
}

function renderDynamicSitemap(domain) {
  const todayStr = new Date().toISOString().split("T")[0];
  let xmlUrls = "";

  SEED_PATHS.forEach((path, index) => {
    const priority = index < 5 ? "1.0" : index < 15 ? "0.9" : "0.8";
    xmlUrls += `  <url>\n    <loc>https://${escapeHtml(domain)}${escapeHtml(path)}</loc>\n    <lastmod>${todayStr}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}</urlset>`, {
    headers: { "content-type": "application/xml;charset=UTF-8", "cache-control": "public, max-age=3600" }
  });
}

function renderRobotsTxt(domain) {
  const body = `User-agent: *\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\nCrawl-delay: 1\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Baiduspider\nAllow: /\n\nSitemap: https://${domain}/sitemap.xml\n`;
  return new Response(body, {
    headers: { "content-type": "text/plain;charset=UTF-8", "cache-control": "public, max-age=86400" }
  });
}

function renderRssFeed(domain) {
  const todayStr = new Date().toISOString();
  const items = SEED_PATHS.slice(0, 20).map((path, index) => {
    const coreWord = CONFIG.coreKeywords[index % CONFIG.coreKeywords.length];
    const tailAttr = CONFIG.tailAttributes[index % CONFIG.tailAttributes.length];
    const topic = CONFIG.topics[index % CONFIG.topics.length];
    const title = `${coreWord}${tailAttr} - ${topic.title}`;
    return `    <item>\n      <title>${escapeHtml(title)}</title>\n      <link>https://${escapeHtml(domain)}${escapeHtml(path)}</link>\n      <guid>https://${escapeHtml(domain)}${escapeHtml(path)}</guid>\n      <pubDate>${todayStr}</pubDate>\n      <description>${escapeHtml(topic.content.substring(0, 180))}...</description>\n    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>${escapeHtml(domain)} 技术更新</title>\n    <link>https://${escapeHtml(domain)}/</link>\n    <description>网络接入与分发技术文档更新</description>\n    <lastBuildDate>${todayStr}</lastBuildDate>\n${items}\n  </channel>\n</rss>`;

  return new Response(xml, {
    headers: { "content-type": "application/rss+xml;charset=UTF-8", "cache-control": "public, max-age=1800" }
  });
}

// ==================== 4. 差异化页面排版引擎（36套模板） ====================
const PAGE_THEMES = [
  { bg: "#f4f6f9", container: "#ffffff", primary: "#007bff", text: "#333333", accent: "#e6f0fa", radius: "8px" },
  { bg: "#fdfbf7", container: "#ffffff", primary: "#d97706", text: "#1f2937", accent: "#fef3c7", radius: "12px" },
  { bg: "#f0fdf4", container: "#ffffff", primary: "#16a34a", text: "#111827", accent: "#dcfce7", radius: "6px" },
  { bg: "#faf5ff", container: "#ffffff", primary: "#7c3aed", text: "#1e1b4b", accent: "#f3e8ff", radius: "16px" },
  { bg: "#fff5f5", container: "#ffffff", primary: "#dc2626", text: "#450a0a", accent: "#fee2e2", radius: "4px" },
  { bg: "#f8fafc", container: "#ffffff", primary: "#0f172a", text: "#334155", accent: "#e2e8f0", radius: "20px" },
  { bg: "#fff7ed", container: "#ffffff", primary: "#ea580c", text: "#431407", accent: "#ffedd5", radius: "10px" },
  { bg: "#f0f9ff", container: "#ffffff", primary: "#0284c7", text: "#0c4a6e", accent: "#e0f2fe", radius: "0px" },
  { bg: "#ecfdf5", container: "#ffffff", primary: "#059669", text: "#064e3b", accent: "#d1fae5", radius: "14px" },
  { bg: "#fefce8", container: "#ffffff", primary: "#ca8a04", text: "#422006", accent: "#fef9c3", radius: "8px" },
  { bg: "#f5f3ff", container: "#ffffff", primary: "#6366f1", text: "#312e81", accent: "#e0e7ff", radius: "18px" },
  { bg: "#fff1f2", container: "#ffffff", primary: "#e11d48", text: "#881337", accent: "#ffe4e6", radius: "6px" }
];

const SECTION_HEADINGS = [
  "官方网络稳定性调优基础架构",
  "分布式网关拓扑结构压力测试报告",
  "多平台性能深度调优日志",
  "边缘节点容灾与链路冗余评测",
  "客户端部署环境兼容性说明",
  "全球中继节点健康监测周报",
  "传输协议优化与弱网适配方案",
  "企业级安全接入实施指南"
];

const LAYOUT_VARIANTS = [
  { sidebar: "right", hero: "top", links: "list", cta: "pill" },
  { sidebar: "left", hero: "top", links: "list", cta: "block" },
  { sidebar: "none", hero: "banner", links: "grid", cta: "pill" },
  { sidebar: "bottom", hero: "inline", links: "grid", cta: "outline" },
  { sidebar: "right", hero: "card", links: "columns", cta: "block" },
  { sidebar: "left", hero: "banner", links: "list", cta: "outline" },
  { sidebar: "none", hero: "top", links: "compact", cta: "pill" },
  { sidebar: "right", hero: "inline", links: "grid", cta: "block" },
  { sidebar: "left", hero: "card", links: "columns", cta: "pill" },
  { sidebar: "bottom", hero: "banner", links: "list", cta: "outline" },
  { sidebar: "none", hero: "card", links: "columns", cta: "block" },
  { sidebar: "right", hero: "banner", links: "compact", cta: "outline" }
];

function getLayoutConfig(pathHash) {
  const templateId = Math.abs(pathHash) % 36;
  const theme = PAGE_THEMES[templateId % PAGE_THEMES.length];
  const variant = LAYOUT_VARIANTS[templateId % LAYOUT_VARIANTS.length];
  const heading = SECTION_HEADINGS[templateId % SECTION_HEADINGS.length];
  return { templateId, theme, variant, heading };
}

function renderSuperSeoPage(currentPath, data, targetLink, totalInnerLinks, pathHash) {
  const { theme, variant, heading } = getLayoutConfig(pathHash);
  const title = escapeHtml(data.title);
  const content = data.content;
  const safeTargetLink = escapeHtml(targetLink);
  const imgKeyword = String(data.title || "").split(" ")[0] || "快连VPN";
  const bingImgSrc = `https://tse-mm.bing.com/th?q=${encodeURIComponent(imgKeyword)}`;

  const linkListHtml = totalInnerLinks
    .map(item => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.name)}</a></li>`)
    .join("");

  const linkGridHtml = totalInnerLinks
    .map(item => `<a class="link-chip" href="${escapeHtml(item.url)}">${escapeHtml(item.name)}</a>`)
    .join("");

  const ctaClass = variant.cta === "outline" ? "btn btn-outline" : variant.cta === "block" ? "btn btn-block" : "btn";
  const ctaHtml = `<a href="${safeTargetLink}" class="${ctaClass}" rel="nofollow">进入官方分发端</a>`;

  const heroHtml = variant.hero === "banner"
    ? `<section class="hero-banner"><h1>${title}</h1><p>官方正版组件安全分发与网络调优文档中心</p>${ctaHtml}</section>`
    : variant.hero === "card"
      ? `<section class="hero-card"><h1>${title}</h1>${ctaHtml}</section>`
      : variant.hero === "inline"
        ? `<header class="hero-inline"><h1>${title}</h1></header>`
        : `<header class="hero-top"><h1>${title}</h1></header>`;

  const imgHtml = `<div class="img-box"><img src="${bingImgSrc}" alt="${title}" loading="lazy"></div>`;
  const articleHtml = `<h2 class="section-title">${escapeHtml(heading)}</h2><article class="content-text">${content}</article>${imgHtml}`;

  let linksPanelHtml = "";
  if (variant.links === "grid") {
    linksPanelHtml = `<div class="category-box link-grid">${linkGridHtml}</div>`;
  } else if (variant.links === "columns") {
    linksPanelHtml = `<div class="link-columns"><div class="category-box"><h3>站内索引</h3><ul>${totalInnerLinks.slice(0, 5).map(item => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.name)}</a></li>`).join("")}</ul></div><div class="category-box"><h3>跨域推荐</h3><ul>${totalInnerLinks.slice(5, 10).map(item => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.name)}</a></li>`).join("")}</ul></div></div>`;
  } else if (variant.links === "compact") {
    linksPanelHtml = `<div class="category-box compact-links"><h3>相关资源</h3><ul>${totalInnerLinks.slice(0, 8).map(item => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.name)}</a></li>`).join("")}</ul></div>`;
  } else {
    linksPanelHtml = `<div class="category-box"><h3>联合推荐网络</h3><ul>${linkListHtml}</ul></div>`;
  }

  const sidePanel = `<aside class="side-panel"><div class="side-cta">${ctaHtml}</div>${linksPanelHtml}</aside>`;
  const mainPanel = `<main class="main-panel">${articleHtml}</main>`;

  let bodyLayout = "";
  if (variant.sidebar === "right") {
    bodyLayout = `<div class="layout-two-col">${mainPanel}${sidePanel}</div>`;
  } else if (variant.sidebar === "left") {
    bodyLayout = `<div class="layout-two-col reverse">${sidePanel}${mainPanel}</div>`;
  } else if (variant.sidebar === "bottom") {
    bodyLayout = `<div class="layout-stack">${heroHtml}${mainPanel}<section class="bottom-panel">${linksPanelHtml}</section></div>`;
  } else {
    bodyLayout = `<div class="layout-single">${heroHtml}${mainPanel}<section class="bottom-cta">${ctaHtml}</section>${linksPanelHtml}</div>`;
  }

  if (variant.sidebar !== "bottom" && variant.sidebar !== "none") {
    bodyLayout = `<div class="container">${variant.hero === "top" ? heroHtml : ""}${bodyLayout}</div>`;
  } else if (variant.sidebar === "none") {
    bodyLayout = `<div class="container">${bodyLayout}</div>`;
  } else {
    bodyLayout = `<div class="container">${bodyLayout}</div>`;
  }

  const baseCss = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: ${theme.bg}; color: ${theme.text}; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.8; padding: 20px; }
    .container { max-width: 1100px; margin: 20px auto; background: ${theme.container}; border-radius: ${theme.radius}; box-shadow: 0 10px 30px rgba(0,0,0,0.04); overflow: hidden; }
    h1 { color: ${theme.primary}; font-size: 24px; line-height: 1.4; }
    .section-title { font-size: 18px; color: ${theme.primary}; margin: 0 0 15px; }
    .content-text { font-size: 15px; color: #374151; text-align: justify; }
    .img-box { width: 100%; border-radius: 8px; overflow: hidden; margin: 25px 0; background: #f3f4f6; border: 1px solid ${theme.accent}; }
    .img-box img { width: 100%; max-height: 360px; object-fit: cover; display: block; }
    .btn { display: inline-block; padding: 14px 36px; background: ${theme.primary}; color: #fff; text-decoration: none; border-radius: 30px; font-weight: bold; }
    .btn-outline { background: transparent; color: ${theme.primary}; border: 2px solid ${theme.primary}; }
    .btn-block { display: block; text-align: center; width: 100%; }
    .layout-two-col { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; padding: 30px; }
    .layout-two-col.reverse { grid-template-columns: 1fr 2fr; }
    .layout-stack, .layout-single { padding: 30px; }
    .hero-banner, .hero-card, .hero-top, .hero-inline { padding: 30px; border-bottom: 1px solid ${theme.accent}; }
    .hero-banner { background: ${theme.accent}; text-align: center; }
    .hero-card { background: linear-gradient(135deg, ${theme.accent}, #fff); }
    .side-panel, .bottom-panel { display: flex; flex-direction: column; gap: 20px; }
    .side-cta, .bottom-cta { background: ${theme.accent}; padding: 20px; border-radius: 8px; text-align: center; }
    .category-box { background: ${theme.accent}; padding: 20px; border-radius: 8px; }
    .category-box h3 { font-size: 15px; color: ${theme.primary}; margin-bottom: 12px; }
    .category-box ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .category-box a, .link-chip { color: #4b5563; text-decoration: none; font-size: 14px; }
    .link-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .link-chip { display: block; padding: 10px; background: #fff; border-radius: 6px; border: 1px solid ${theme.accent}; }
    .link-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
  `;

  const html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="keywords" content="${title}, 快连VPN, letsvpn, 快连下载, 快连官网"><meta name="description" content="本页面提供关于${title}的核心系统总览。"><link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"><style>${baseCss}@media(max-width:800px){.layout-two-col,.layout-two-col.reverse,.link-columns,.link-grid{grid-template-columns:1fr}}</style></head><body>${bodyLayout}<footer style="text-align:center;padding:20px;color:#9ca3af;font-size:13px;">&copy; 2026 官方云分发总控制台</footer></body></html>`;

  return new Response(html, {
    headers: { "content-type": "text/html;charset=UTF-8", "cache-control": "public, max-age=600" }
  });
}

// ==================== 5. 三合一蜘蛛统计控制面板（懒加载优化） ====================
const KV_GET_BATCH_SIZE = 25;
const DASHBOARD_HIST_KEY_LIMIT = 1200;
const DASHBOARD_LIVE_KEY_LIMIT = 80;
const DASHBOARD_DETAIL_KEY_LIMIT = 200;

async function batchKvGet(kv, keyRows, batchSize = KV_GET_BATCH_SIZE) {
  const names = keyRows.map(key => (typeof key === "string" ? key : key.name));
  const results = [];

  for (let i = 0; i < names.length; i += batchSize) {
    const chunk = names.slice(i, i + batchSize);
    const chunkVals = await Promise.all(chunk.map(name => kv.get(name)));
    results.push(...chunkVals);
  }

  return results;
}

function parseV2LogKey(keyName) {
  const match = keyName.match(/^v2log_(\d{4}-\d{2}-\d{2})_(.+)_(baidu|google|bing)$/);
  if (!match) return null;
  return { date: match[1], bot: match[3] };
}

function parseLiveKey(keyName) {
  const match = keyName.match(/^live_(\d+)_(baidu|google|bing)_(.+)$/);
  if (!match) return null;
  return { timeNum: parseInt(match[1], 10), bot: match[2], node: match[3] };
}

async function listKeys(kv, prefix, maxKeys) {
  const keys = [];
  let cursor;

  do {
    const page = await kv.list({
      prefix,
      limit: Math.min(1000, maxKeys - keys.length),
      cursor
    });

    keys.push(...page.keys);
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor && keys.length < maxKeys);

  return keys;
}

async function loadDailyStats(kv) {
  const dailyStats = {};
  const histKeys = await listKeys(kv, "v2log_", DASHBOARD_HIST_KEY_LIMIT);

  if (histKeys.length === 0) return dailyStats;

  const vals = await batchKvGet(kv, histKeys);
  for (let i = 0; i < histKeys.length; i++) {
    const parsed = parseV2LogKey(histKeys[i].name);
    if (!parsed) continue;

    const val = Number(vals[i] || 0);
    if (!dailyStats[parsed.date]) dailyStats[parsed.date] = { baidu: 0, google: 0, bing: 0 };
    if (dailyStats[parsed.date][parsed.bot] !== undefined) {
      dailyStats[parsed.date][parsed.bot] += val;
    }
  }

  return dailyStats;
}

async function loadLiveRows(kv) {
  const liveKeys = await listKeys(kv, "live_", DASHBOARD_LIVE_KEY_LIMIT);
  if (liveKeys.length === 0) return [];

  const rows = liveKeys.slice().reverse().slice(0, 50);
  const vals = await batchKvGet(kv, rows);
  const result = [];

  for (let i = 0; i < rows.length; i++) {
    const parsed = parseLiveKey(rows[i].name);
    if (!parsed) continue;
    result.push({
      timeStr: new Date(parsed.timeNum).toLocaleTimeString(),
      node: parsed.node,
      bot: parsed.bot,
      path: vals[i] || ""
    });
  }

  return result;
}

async function loadBotDetails(kv, date, bot) {
  const prefix = `v2detail_${date}_${bot}_`;
  const keys = await listKeys(kv, prefix, DASHBOARD_DETAIL_KEY_LIMIT);
  if (keys.length === 0) return [];

  const vals = await batchKvGet(kv, keys);
  const items = [];

  for (const raw of vals) {
    if (!raw) continue;
    try {
      items.push(JSON.parse(raw));
    } catch (e) {}
  }

  return items.sort((a, b) => (b.time || 0) - (a.time || 0));
}

async function handleDashboardApi(kv, searchParams) {
  if (!kv) {
    return new Response(JSON.stringify({ error: "KV not bound" }), {
      status: 500,
      headers: { "content-type": "application/json;charset=UTF-8" }
    });
  }

  const action = searchParams.get("action") || "details";
  const date = searchParams.get("date") || "";
  const bot = searchParams.get("bot") || "";

  try {
    if (action === "summary") {
      const dailyStats = await loadDailyStats(kv);
      return new Response(JSON.stringify({ dailyStats }), {
        headers: { "content-type": "application/json;charset=UTF-8", "cache-control": "no-store" }
      });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !["baidu", "google", "bing"].includes(bot)) {
      return new Response(JSON.stringify({ error: "Invalid date or bot" }), {
        status: 400,
        headers: { "content-type": "application/json;charset=UTF-8" }
      });
    }

    const rows = await loadBotDetails(kv, date, bot);
    return new Response(JSON.stringify({ date, bot, rows }), {
      headers: { "content-type": "application/json;charset=UTF-8", "cache-control": "no-store" }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e?.message || "unknown error" }), {
      status: 500,
      headers: { "content-type": "application/json;charset=UTF-8" }
    });
  }
}

async function renderMultiBotDashboard(kv, hostname) {
  let liveRowsHtml = "<tr><td colspan='4' style='padding:12px;text-align:center;color:#999;'>暂无 5 分钟内实时在线爬行蜘蛛</td></tr>";
  let currentLinksText = "";
  let dailyRowsHtml = "<tr><td colspan='5' style='padding:12px;text-align:center;color:#999;'>暂无每日蜘蛛统计数据</td></tr>";

  const botBadge = (bot, live = false) => {
    if (bot === "baidu") return `<span style="background:${live ? "#16a34a" : "#dcfce7"}; color:${live ? "#fff" : "#15803d"}; padding:3px 8px; border-radius:30px; font-weight:bold; font-size:11px;">${live ? "正在爬行: 百度" : "百度 Baiduspider"}</span>`;
    if (bot === "google") return `<span style="background:${live ? "#d97706" : "#fef3c7"}; color:${live ? "#fff" : "#b45309"}; padding:3px 8px; border-radius:30px; font-weight:bold; font-size:11px;">${live ? "正在爬行: Google" : "谷歌 Googlebot"}</span>`;
    return `<span style="background:${live ? "#0284c7" : "#e0f2fe"}; color:${live ? "#fff" : "#0369a1"}; padding:3px 8px; border-radius:30px; font-weight:bold; font-size:11px;">${live ? "正在爬行: Bing" : "必应 Bingbot"}</span>`;
  };

  if (kv) {
    try {
      currentLinksText = escapeHtml(formatTargetLinksForDisplay(await kv.get("target_links_config") || ""));
    } catch (e) {}

    try {
      const dailyStats = await loadDailyStats(kv);
      const liveRows = await loadLiveRows(kv);
      const dailyDates = Object.keys(dailyStats).sort().reverse().slice(0, 30);

      if (dailyDates.length > 0) {
        dailyRowsHtml = "";
        for (const date of dailyDates) {
          const item = dailyStats[date];
          const total = item.baidu + item.google + item.bing;
          dailyRowsHtml += `<tr>
            <td style="font-weight:bold;">${escapeHtml(date)}</td>
            <td><button class="bot-btn baidu" onclick="showBotDetails('${escapeHtml(date)}','baidu',${item.baidu})">百度：${item.baidu} 次</button></td>
            <td><button class="bot-btn google" onclick="showBotDetails('${escapeHtml(date)}','google',${item.google})">谷歌：${item.google} 次</button></td>
            <td><button class="bot-btn bing" onclick="showBotDetails('${escapeHtml(date)}','bing',${item.bing})">必应：${item.bing} 次</button></td>
            <td style="font-weight:bold;color:#2563eb;">${total} 次</td>
          </tr>`;
        }
      }

      if (liveRows.length > 0) {
        liveRowsHtml = liveRows.map(row => `<tr style="background:#fcfdfa;"><td>${escapeHtml(row.timeStr)}</td><td>${escapeHtml(row.node)}</td><td>${botBadge(row.bot, true)}</td><td style="font-family:monospace;color:#ef4444;font-weight:600;">${escapeHtml(row.path)}</td></tr>`).join("");
      }
    } catch (e) {}
  }

  return new Response(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>中央控制面板</title><style>
body{font-family:sans-serif;background:#f8fafc;padding:40px;color:#1e293b}.box{max-width:1100px;margin:0 auto 30px;background:#fff;padding:30px;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,.03)}textarea{width:100%;height:140px;padding:10px;border:1px solid #cbd5e1;border-radius:6px;font-family:monospace;line-height:1.6}.btn-save{background:#2563eb;color:#fff;padding:10px 24px;border:none;border-radius:6px;cursor:pointer;font-weight:bold;margin-top:10px}table{width:100%;border-collapse:collapse;margin-top:15px}th,td{padding:12px;text-align:left;border-bottom:1px solid #e2e8f0;font-size:14px}.bot-btn{border:none;border-radius:6px;padding:7px 12px;color:#fff;font-weight:bold;cursor:pointer}.baidu{background:#16a34a}.google{background:#d97706}.bing{background:#0284c7}.modal-mask{display:none;position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:999;align-items:center;justify-content:center}.modal{width:min(900px,90vw);max-height:80vh;overflow:auto;background:#fff;border-radius:12px;padding:24px}.url-item{padding:10px;border-bottom:1px solid #e2e8f0;font-family:monospace;word-break:break-all}.muted{color:#64748b;font-size:13px;margin-top:6px}.loading{padding:20px;color:#64748b}
</style></head><body>
<div class="box"><h2>数据分发目标外链配置中心</h2><div class="muted">当前面板域名：${escapeHtml(hostname)} | 一行填写一个网址，无需引号和逗号</div><textarea id="linksInput" placeholder="https://kuailian-letsv.com/&#10;https://kuailalian.com/">${currentLinksText}</textarea><button class="btn-save" onclick="saveLinks()">更新配置数据</button></div>
<div class="box"><h2>每日蜘蛛统计总览</h2><table><thead><tr><th>日期</th><th>百度蜘蛛</th><th>谷歌蜘蛛</th><th>必应蜘蛛</th><th>总次数</th></tr></thead><tbody>${dailyRowsHtml}</tbody></table></div>
<div class="box" style="border:2px solid #22c55e;"><h2 style="color:#16a34a;">实时蜘蛛流量（最近 5 分钟）</h2><table><thead><tr><th>触发时间</th><th>节点</th><th>蜘蛛</th><th>URL 路径</th></tr></thead><tbody>${liveRowsHtml}</tbody></table></div>
<div id="botModal" class="modal-mask" onclick="closeBotDetails()"><div class="modal" onclick="event.stopPropagation()"><h2 id="modalTitle"></h2><div id="modalBody" class="loading">加载中...</div><button class="btn-save" onclick="closeBotDetails()">关闭</button></div></div>
<script>
const botNames={baidu:"百度蜘蛛",google:"谷歌蜘蛛",bing:"必应蜘蛛"};
function safeText(s){const map={"&":"&amp;","<":"&lt;",">":"&gt;","\\"":"&quot;","'":"&#39;"};return String(s||"").replace(/[&<>"']/g,function(m){return map[m]})}
async function showBotDetails(date,bot,count){
 document.getElementById("modalTitle").innerText=date+" "+(botNames[bot]||"蜘蛛")+" URL 明细";
 document.getElementById("modalBody").innerHTML='<div class="loading">正在加载明细...</div>';
 document.getElementById("botModal").style.display="flex";
 if(count<=0){document.getElementById("modalBody").innerHTML='<div class="loading">当天暂无该蜘蛛访问记录。</div>';return}
 try{
  const res=await fetch('/spider-dashboard-api?date='+encodeURIComponent(date)+'&bot='+encodeURIComponent(bot));
  const data=await res.json();
  const rows=data.rows||[];
  if(!rows.length){document.getElementById("modalBody").innerHTML='<div class="loading">统计共 '+count+' 次，但暂无 URL 明细。</div>';return}
  document.getElementById("modalBody").innerHTML=rows.map(function(x){return '<div class="url-item"><b>'+new Date(x.time).toLocaleTimeString()+'</b> '+safeText(x.host)+'<br>'+safeText(x.fullUrl||x.path)+'</div>'}).join("");
 }catch(e){document.getElementById("modalBody").innerHTML='<div class="loading">加载失败，请稍后重试。</div>'}
}
function closeBotDetails(){document.getElementById("botModal").style.display="none"}
async function saveLinks(){
 const val=document.getElementById("linksInput").value.trim();
 if(!val){alert("请至少填写一个网址");return}
 const lines=val.split(/\\r?\\n/).map(function(s){return s.trim()}).filter(Boolean);
 if(!lines.length){alert("请至少填写一个网址");return}
 const res=await fetch(window.location.pathname,{method:"POST",body:val,headers:{"Content-Type":"text/plain;charset=UTF-8"}});
 const msg=await res.text();
 alert(res.ok?"目标分发外链全球同步成功！":(msg||"操作失败"));
}
</script></body></html>`, {
    headers: { "content-type": "text/html;charset=UTF-8", "cache-control": "no-store" }
  });
}
