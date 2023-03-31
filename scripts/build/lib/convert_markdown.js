import { linkify } from '#scripts/build/lib/linkify'

const convertMarkdownBoldAndItalic = text => {
  return text?.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\*([^*]+)\*/g, '<i>$1</i>')
}

const convertMarkdownLinks = text => {
  if (text == null) return

  return text
  // Replacing local links first
  // that is links starting by / or a variable starting with %
  // Example:
  // - "your_item_was_requested_subject": "%{username} requested your book [%{title}](%{link})"
  .replace(/\[([^\]]+)\]\(((\/|%)[^)]+)\)/g, dynamicLink)
  // Remove the target on those local links
  .replace(" target='_blank'", '')
  // Then replace other links and keep the target='_blank'
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, dynamicLink)
}

// used by String::replace to pass text -> $1 and url -> $2 values
const dynamicLink = linkify('$1', '$2')

export function convertMarkdown (text) {
  return convertMarkdownLinks(convertMarkdownBoldAndItalic(text))
}
