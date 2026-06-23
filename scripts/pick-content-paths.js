#!/usr/bin/env node
const { execSync } = require("child_process");
const { hashCode } = require("./keyword-utils");
const { kvGetValue, parseArticleMeta, contentKvKey } = require("./kv-api");

const [domain, slot = "0", count = "2"] = process.argv.slice(2);
if (!domain) {
  process.stderr.write("usage: pick-content-paths.js <domain> [slot] [count]\n");
  process.exit(1);
}

const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const CF_KV_NAMESPACE_ID = process.env.CF_KV_NAMESPACE_ID;
const CF_API_TOKEN = process.env.CF_API_TOKEN;
const pickCount = Math.max(1, Number(count) || 2);
const slotNum = Number(slot) || 0;

const paths = execSync("node scripts/list-content-paths.js", { encoding: "utf8" })
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(Boolean);

async function inspectPath(path) {
  if (!CF_ACCOUNT_ID || !CF_KV_NAMESPACE_ID || !CF_API_TOKEN) {
    return { path, hasContent: false, updatedAt: "" };
  }
  const key = contentKvKey(domain, path);
  const raw = await kvGetValue(CF_ACCOUNT_ID, CF_KV_NAMESPACE_ID, CF_API_TOKEN, key);
  const meta = parseArticleMeta(raw);
  if (!meta) return { path, hasContent: false, updatedAt: "" };
  return {
    path,
    hasContent: true,
    updatedAt: meta.updatedAt || meta.publishedAt || ""
  };
}

async function main() {
  const dayIndex = Math.floor((Date.now() / 86400000 + 719528) % 365) || new Date().getUTCDate();
  const base = (dayIndex * 15 + slotNum * pickCount) % paths.length;
  const inspected = [];

  for (let j = 0; j < paths.length; j++) {
    const path = paths[(base + j) % paths.length];
    inspected.push(await inspectPath(path));
  }

  const emptyPaths = inspected.filter(row => !row.hasContent);
  const filledPaths = inspected
    .filter(row => row.hasContent)
    .sort((a, b) => String(a.updatedAt || "0000").localeCompare(String(b.updatedAt || "0000")));

  const picked = [];
  const used = new Set();

  for (const row of emptyPaths) {
    if (picked.length >= pickCount) break;
    if (used.has(row.path)) continue;
    picked.push(row.path);
    used.add(row.path);
  }

  for (const row of filledPaths) {
    if (picked.length >= pickCount) break;
    if (used.has(row.path)) continue;
    picked.push(row.path);
    used.add(row.path);
  }

  if (picked.length < pickCount) {
    for (let j = 0; j < paths.length && picked.length < pickCount; j++) {
      const path = paths[(base + picked.length + j) % paths.length];
      if (used.has(path)) continue;
      picked.push(path);
      used.add(path);
    }
  }

  process.stdout.write(picked.join("\n"));
}

main().catch(err => {
  process.stderr.write(String(err.message || err));
  process.exit(1);
});
