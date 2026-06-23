#!/usr/bin/env node
const { pickBackupArticle } = require("./keyword-utils");
const [pagePath, domain, slot = "0"] = process.argv.slice(2);
if (!pagePath || !domain) {
  process.stderr.write("usage: pick-backup-article.js <path> <domain> [slot]\n");
  process.exit(1);
}
process.stdout.write(JSON.stringify(pickBackupArticle(pagePath, domain, Number(slot))));
