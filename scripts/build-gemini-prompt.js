#!/usr/bin/env node
const { buildGeminiPrompt } = require("./keyword-utils");
const [pagePath, domain, slot = "0"] = process.argv.slice(2);
if (!pagePath || !domain) {
  process.stderr.write("usage: build-gemini-prompt.js <path> <domain> [slot]\n");
  process.exit(1);
}
process.stdout.write(buildGeminiPrompt(pagePath, domain, Number(slot)));
