#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const input = process.argv.slice(2).join(" ") || process.env.TARGET_DOMAINS || process.env.DOMAINS || "";

function normalizeDomain(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");
}

function parseDomainList(raw) {
  return String(raw || "")
    .split(/[\s,]+/)
    .map(normalizeDomain)
    .filter(Boolean);
}

function readText(file) {
  return fs.readFileSync(path.join(rootDir, file), "utf8");
}

function parseWorkerDomains() {
  const worker = readText("worker.js");
  const match = worker.match(/domainCluster:\s*\[([\s\S]*?)\]/);
  if (!match) return [];
  return [...match[1].matchAll(/"([^"]+)"/g)].map(row => normalizeDomain(row[1]));
}

function parseWranglerDomains() {
  const wrangler = readText("wrangler.toml");
  return [...wrangler.matchAll(/pattern\s*=\s*"([^"]+)"/g)]
    .map(row => normalizeDomain(row[1].replace(/^\*\./, "")))
    .filter(Boolean);
}

function parseKeywordDomains() {
  const config = JSON.parse(readText("keyword-pools.json"));
  return Object.keys(config.domainBias || {}).map(normalizeDomain);
}

function difference(expected, actual) {
  const actualSet = new Set(actual);
  return expected.filter(domain => !actualSet.has(domain));
}

const targetDomains = [...new Set(parseDomainList(input))];
if (targetDomains.length === 0) {
  console.error("usage: node scripts/check-domain-config.js <domain1 domain2 ...>");
  console.error("or set TARGET_DOMAINS before running this script.");
  process.exit(1);
}

const checks = [
  ["worker.js CONFIG.domainCluster", parseWorkerDomains()],
  ["wrangler.toml routes", parseWranglerDomains()],
  ["keyword-pools.json domainBias", parseKeywordDomains()]
];

let hasMissing = false;
for (const [label, configured] of checks) {
  const missing = difference(targetDomains, configured);
  if (missing.length === 0) {
    console.log(`OK ${label}`);
    continue;
  }

  hasMissing = true;
  console.log(`MISSING ${label}: ${missing.join(" ")}`);
}

process.exit(hasMissing ? 2 : 0);
