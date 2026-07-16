import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

function addLinksAttributes (text) {
  return text
  .replace(/<a href="(http[^"]+)"/g, '<a href="$1" class="link" target="_blank" rel="noopener"')
  // Not setting target on internal links
  .replace(/<a href="(\/[^"]+)"/g, '<a href="$1" class="link" rel="noopener"')
  // Do set the target on interpolation link (which might also be internal links)
  .replace(/<a href="(%{[^}]+})"/g, '<a href="$1" class="link" target="_blank" rel="noopener"')
}

function convertNewlineBreaks (text) {
  return text.replace(/\n/g, '<br />')
}

const allowedTags = [
  'a',
  'em',
  'strong',
]

const allowedAttributes = {
  'a': [ 'href' ]
}

function recoverInterpolation (text) {
  return text
  // "{" and "}" would have been escaped by sanitizeHtml
  .replace(/%7B/g, '{')
  .replace(/%7D/g, '}')
}

function parseAllowlistedHtmlEntities (text) {
  return text
  .replace(/&amp;/g, '&')
}

export function convertMarkdown (text) {
  // @ts-expect-error
  const html = marked(text).trim()
  const sanitizedHtml = sanitizeHtml(html, { allowedTags, allowedAttributes })
  const after = parseAllowlistedHtmlEntities(convertNewlineBreaks(addLinksAttributes(recoverInterpolation(sanitizedHtml))))
  return after
}
