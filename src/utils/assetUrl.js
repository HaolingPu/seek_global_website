/**
 * Resolve a public asset path against Vite's BASE_URL.
 *
 * Hard-coded paths like "/images/foo.jpg" work on Vercel (base "/") but break
 * on GitHub Pages (base "/seek_global_website/") because the leading "/"
 * always resolves to the site root, not the project subpath. This helper
 * strips the leading slash and joins with BASE_URL so the same path works
 * for every deployment target.
 *
 * Usage:
 *   <img src={assetUrl('/images/hero.jpg')} />
 *   <img src={assetUrl(item.image)} />
 */
export function assetUrl(path) {
  if (!path) return path
  if (/^https?:\/\//i.test(path)) return path // already absolute URL
  const base = import.meta.env.BASE_URL // always ends with "/"
  const clean = path.startsWith('/') ? path.slice(1) : path
  return base + clean
}
