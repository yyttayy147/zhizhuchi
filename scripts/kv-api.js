function encodeKvKey(key) {
  return encodeURIComponent(key);
}

function kvValueUrl(accountId, namespaceId, key) {
  return `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${encodeKvKey(key)}`;
}

async function kvGetValue(accountId, namespaceId, token, key) {
  const res = await fetch(kvValueUrl(accountId, namespaceId, key), {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (res.status !== 200) return null;
  const text = await res.text();
  return text || null;
}

async function kvDeleteValue(accountId, namespaceId, token, key) {
  await fetch(kvValueUrl(accountId, namespaceId, key), {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });
}

function parseArticleMeta(raw) {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.title && parsed?.content) {
      return {
        title: parsed.title,
        content: parsed.content,
        author: parsed.author,
        publishedAt: parsed.publishedAt,
        updatedAt: parsed.updatedAt,
        articleType: parsed.articleType
      };
    }
  } catch (e) {}
  return null;
}

function contentKvKey(domain, path) {
  return `content_${domain}_${path}`;
}

function sitemapCacheKey(domain) {
  return `sitemap_cache_${domain}`;
}

module.exports = {
  kvGetValue,
  kvDeleteValue,
  parseArticleMeta,
  contentKvKey,
  sitemapCacheKey
};
