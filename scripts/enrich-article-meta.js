#!/usr/bin/env node
const { hashCode, humanizeContent } = require("./keyword-utils");

const [pagePath, domain, slot = "0", existingJson = ""] = process.argv.slice(2);
const today = new Date().toISOString().split("T")[0];
const types = ["tutorial", "review", "faq", "news"];
const authors = ["编辑部", "技术组", "小李", "评测君", "运维笔记"];
const seed = Math.abs(hashCode(`${pagePath}|${domain}|meta|${slot}`));

let existing = {};
if (existingJson && existingJson !== "null") {
  try {
    existing = JSON.parse(existingJson);
  } catch (e) {}
}

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", chunk => { input += chunk; });
process.stdin.on("end", () => {
  try {
    const article = JSON.parse(input.trim());
    const enriched = {
      title: String(article.title || "").trim(),
      content: humanizeContent(String(article.content || "").trim()),
      author: existing.author || article.author || authors[seed % authors.length],
      articleType: existing.articleType || article.articleType || types[seed % types.length],
      publishedAt: existing.publishedAt || article.publishedAt || today,
      updatedAt: today
    };
    process.stdout.write(JSON.stringify(enriched));
  } catch (e) {
    process.stderr.write(String(e.message || e));
    process.exit(1);
  }
});
