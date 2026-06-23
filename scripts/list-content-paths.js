#!/usr/bin/env node
const { getAllPaths } = require("./keyword-utils");

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

process.stdout.write(getAllPaths(BASE_PATHS).join("\n"));
