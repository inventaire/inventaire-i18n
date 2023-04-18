export default function (resource) {
  const entries = Object.entries(resource).sort(byCharacterCode)
  return Object.fromEntries(entries)
}

function byCharacterCode ([ a ], [ b ]) {
  for (let i = 0; i < a.length; i++) {
    if (b[i] == null) return 1
    if (a[i] !== b[i]) {
      return a.charCodeAt(i) - b.charCodeAt(i)
    }
  }
  return -1
}
