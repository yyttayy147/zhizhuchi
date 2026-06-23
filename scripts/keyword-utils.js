const fs = require("fs");
const path = require("path");

const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "keyword-pools.json"), "utf8")
);

const ARTICLE_STYLES = [
  {
    id: "tutorial",
    label: "教程型",
    rules: "用步骤式写法（第一步、第二步…），包含至少一个具体操作路径或按钮名称，附一个「常见问题」小节（2-3问）。"
  },
  {
    id: "review",
    label: "评测型",
    rules: "从速度、易用性、稳定性三个维度展开，可穿插个人测试数据（如延迟、耗时），语气偏体验分享。"
  },
  {
    id: "faq",
    label: "问答型",
    rules: "正文以5个问答组成，每个问题做标题式开头，回答简短直接，像论坛答疑帖。"
  },
  {
    id: "news",
    label: "快讯型",
    rules: "300-600字短讯，交代版本号/更新日期/主要变化三点，语气像行业快讯，不要铺垫过长。"
  }
];

const BANNED_PHRASES = [
  "综上所述", "毋庸置疑", "在当今数字化时代", "在当今时代",
  "业界领先", "全方位", "深度融合", "极致", "磐石般", "死死坚守",
  "不言而喻", "众所周知", "随着科技的飞速发展", "日新月异"
];

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function humanizeContent(text) {
  let out = String(text || "");
  const rules = [
    [/在当今数字化时代[，,]?/g, ""],
    [/在当今.{0,6}时代[，,]?/g, ""],
    [/随着.{0,24}的快速发展[，,]?/g, ""],
    [/随着.{0,24}的不断发展[，,]?/g, ""],
    [/综上所述[，,]?/g, ""],
    [/毋庸置疑[，,]?/g, ""],
    [/业界领先/g, "表现不错"],
    [/全方位/g, ""],
    [/深度融合/g, "结合"],
    [/极致/g, ""],
    [/死死坚守/g, "保持在"],
    [/磐石般/g, ""],
    [/\n{3,}/g, "\n\n"]
  ];
  for (const [pattern, replacement] of rules) {
    out = out.replace(pattern, replacement);
  }
  return out.trim();
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

function pathHint(pagePath) {
  const slug = String(pagePath || "").replace(/\.html$/, "").split("/").pop() || "article";
  return slug.replace(/-/g, " ");
}

function buildGeminiPrompt(pagePath, domain, slot) {
  const seed = Math.abs(hashCode(`${pagePath}|${domain}|${slot}`));
  const profile = pickKeywordProfile(domain, seed);
  const pool = config.pools[profile.poolKey];
  const keywordList = pool.keywords.slice(0, 5).join("、");
  const style = ARTICLE_STYLES[seed % ARTICLE_STYLES.length];
  const versionTag = `v${(seed % 9) + 1}.${seed % 10}.${(seed % 20) + 1}`;
  const banned = BANNED_PHRASES.join("、");

  return [
    `你是域名 ${domain} 的兼职技术博主，给普通读者写实操内容，不要写白皮书或官方公告。`,
    `页面路径：${pagePath}（可从路径联想具体场景：${pathHint(pagePath)}）`,
    `这是今天第 ${slot} 次更新，必须与该域名已有文章角度不同。`,
    `主题：${profile.topicHint}，围绕「${profile.primary}」展开，可提及 ${profile.secondary}。`,
    `文体：${style.label}。${style.rules}`,
    `标题：像博客标题，自然含以下词之一：${keywordList}。不要用「完整指南」「技术白皮书」「深度解析」这类套话。`,
    `正文：800-1500字，段落长短错落。至少一处第一人称（如「我试过…」「上周测试…」）。`,
    `必须包含一个具体版本号或日期（可参考 ${versionTag} 或 2026年6月）。`,
    `禁止用词：${banned}，以及 SEO、站群、蜘蛛、收录、优化 等词。`,
    "不要 Markdown，严格输出 JSON：{\"title\":\"标题\",\"content\":\"正文\"}"
  ].join("\n");
}

function pickBackupArticle(pagePath, domain, slot) {
  const seed = Math.abs(hashCode(`${pagePath}|${domain}|backup|${slot}`));
  const profile = pickKeywordProfile(domain, seed);
  const matched = config.backupArticles.filter(item => item.pool === profile.poolKey);
  const list = matched.length ? matched : config.backupArticles;
  const picked = list[seed % list.length];
  return {
    title: picked.title,
    content: humanizeContent(picked.content)
  };
}

function getAllPaths(basePaths) {
  return [...basePaths, ...config.extraPaths];
}

module.exports = {
  config,
  hashCode,
  humanizeContent,
  pickKeywordProfile,
  buildGeminiPrompt,
  pickBackupArticle,
  getAllPaths
};
