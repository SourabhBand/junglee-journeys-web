// Host canonicalization: 301 www → apex. Pages `_redirects` cannot match on
// host (domain-level redirects are unsupported), so this middleware is the
// in-repo way to stop Google indexing www duplicates. A zone-level Redirect
// Rule in the Cloudflare dashboard would also work and skips the worker
// invocation; if one is ever added, this file can be deleted.
export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  if (url.hostname === 'www.jungleejourneys.com') {
    url.hostname = 'jungleejourneys.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
};
