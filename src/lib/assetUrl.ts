/** Public asset URLs that work on GitHub Pages (/portfoliowebsite/) and in local dev. */
export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, '')
  const pathWithBase = `${import.meta.env.BASE_URL}${normalized}`.replace(
    /([^:]\/)\/+/g,
    '$1',
  )

  if (typeof window !== 'undefined') {
    return new URL(pathWithBase, window.location.origin).href
  }

  return pathWithBase
}
