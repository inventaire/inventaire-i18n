export default function (resource) {
  const entries = Object.entries(resource).sort(byLowerCasedCharacterCode)
  return Object.fromEntries(entries)
}

const isPropertyId = key => /^P\d+$/.test(key)
const parseNumericId = key => parseInt(key.substring(1))

function byLowerCasedCharacterCode ([ a ], [ b ]) {
  if (isPropertyId(a) && isPropertyId(b)) {
    return parseNumericId(a) - parseNumericId(b)
  } else if (isPropertyId(a)) {
    return -1
  } else if (isPropertyId(b)) {
    return 1
  }

  a = a.toLowerCase()
  b = b.toLowerCase()

  for (let i = 0; i < a.length; i++) {
    if (b[i] == null) return 1
    if (a[i] !== b[i]) {
      return a.charCodeAt(i) - b.charCodeAt(i)
    }
  }
  return -1
}
