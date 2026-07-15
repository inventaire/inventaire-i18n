import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

function convertMarkdownBoldAndItalic (text) {
  return text?.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\*([^*]+)\*/g, '<i>$1</i>')
}

function addLinksAttributes (text) {
  return text
  .replace(/<a href="(http[^"]+)"/g, '<a href="$1" class="link" target="_blank" rel="noopener"')
  // Not setting target on internal links
  .replace(/<a href="(\/[^"]+)"/g, '<a href="$1" class="link" rel="noopener"')
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

export function convertMarkdown (text) {
  // @ts-expect-error
  const html = marked(text).trim()
  const sanitizedHtml = sanitizeHtml(html, { allowedTags, allowedAttributes })
  const after = convertNewlineBreaks(addLinksAttributes(sanitizedHtml))
  return after
}
