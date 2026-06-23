const fs = require("fs");
const path = require("path");

const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "keyword-pools.json"), "utf8")
);

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function pickKeywordProfile(hostname, seed) {
  const host = String(hostname || "").toLowerCase().replace(/^www\./, "");
  const bias = config.domainBias[host] || Object.keys(config.pools);
  const poolKey = bias[Math.abs(seed) % bias.length];
  const pool = config.pools[poolKey];
  const kwIdx = Math.abs(seed + 3) % pool.keywords.length;
  const tailIdx = Math.abs(seed + 7) % pool.tails.length;
  const imgIdx = Math.abs(seed + 11) % pool.imageQueries.length;

  return {
    poolKey,
    primary: pool.keywords[kwIdx],
    secondary: pool.keywords[(kwIdx + 1) % pool.keywords.length],
    tertiary: pool.keywords[(kwIdx + 2) % pool.keywords.length],
    tail: pool.tails[tailIdx],
    imageQuery: pool.imageQueries[imgIdx],
    imageQuery2: pool.imageQueries[(imgIdx + 1) % pool.imageQueries.length],
    topicHint: pool.topicHint,
    metaKeywords: [
      pool.keywords[kwIdx],
      pool.keywords[(kwIdx + 1) % pool.keywords.length],
      pool.keywords[(kwIdx + 2) % pool.keywords.length],
      pool.keywords[(kwIdx + 3) % pool.keywords.length]
    ]
  };
}

function buildGeminiPrompt(pagePath, domain, slot) {
  const seed = Math.abs(hashCode(`${pagePath}|${domain}|${slot}`));
  const profile = pickKeywordProfile(domain, seed);
  const pool = config.pools[profile.poolKey];
  const keywordList = pool.keywords.slice(0, 5).join("、");

  return [
    `你是一个专业的科技内容文档工程师。请为路径 ${pagePath}、域名 ${domain} 的网页撰写高质量中文技术文章。`,
    `这是今天第 ${slot} 次定时更新，内容必须与同域名其他页面明显不同。`,
    `主题方向：${profile.topicHint}。`,
    `标题必须自然包含以下关键词之一：${keywordList}。`,
    `正文 500-2000 字，围绕 ${profile.primary} 展开，可顺带提及 ${profile.secondary}、${profile.tertiary}。`,
    "文风专业、信息具体，像真实产品文档或评测报告，不要堆砌关键词。",
    "严禁出现 SEO、站群、优化、收录、蜘蛛池等敏感词。",
    '严格输出 JSON，不要 Markdown：{"title":"标题","content":"正文"}'
  ].join("\n");
}

function pickBackupArticle(pagePath, domain, slot) {
  const seed = Math.abs(hashCode(`${pagePath}|${domain}|backup|${slot}`));
  const profile = pickKeywordProfile(domain, seed);
  const matched = config.backupArticles.filter(item => item.pool === profile.poolKey);
  const list = matched.length ? matched : config.backupArticles;
  return list[seed % list.length];
}

function getAllPaths(basePaths) {
  return [...basePaths, ...config.extraPaths];
}

module.exports = {
  config,
  hashCode,
  pickKeywordProfile,
  buildGeminiPrompt,
  pickBackupArticle,
  getAllPaths
};
