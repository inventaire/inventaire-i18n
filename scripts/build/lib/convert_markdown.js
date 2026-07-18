const dynamicLink = '<a href="$2" class="link" target="_blank" rel="noopener">$1</a>'

export function convertMarkdown (text) {
  return text
    // Replacing local links first
    // that is links starting by / or a variable starting with %
    // Example:
    // - "your_item_was_requested_subject": "%{username} requested your book [%{title}](%{link})"
    .replace(/\[([^\]]+)\]\(((\/|%)[^)]+)\)/g, dynamicLink)
    // Remove the target on those local links
    .replace(' target="_blank"', '')
    // Then replace other links and keep the target='_blank'
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, dynamicLink)
    // Replace newline breaks by their HTML equivalent
    .replace(/\n/g, '<br />')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic: not used, so skipped
    // .replace(/\*([^*]+)\*/g, '<em>$1</em>')
}
