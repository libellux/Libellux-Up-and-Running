const inBrowser = typeof window !== 'undefined'

export const RE_EXTERNAL_LINK = /^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/
export const RE_SVG_SOURCE = /<svg (.*?)>(.*?)<\/svg>/i

/**
 * Return meta tag's content in browser by name
 * @param {string} name meta tag's name
 *
 * @returns meta tag's content if exists, or `''`
 */
export function getMetaContentByName (name) {
  if (!inBrowser) return ''

  return (document.getElementsByName(name)[0] || 0).content || ''
}

/**
 * Check if the given url is external
 * @param {string} url given url
 *
 * @returns {boolean} `true` is given an external url
 */
export function isExternalUrl (url) {
  return RE_EXTERNAL_LINK.test(url)
}

/**
 * Check if the given source string is SVG
 * @param {string} source given source string
 *
 * @returns {boolean} `true` if given a svg source string
 */
export function isSVG (source) {
  return RE_SVG_SOURCE.test(source)
}
