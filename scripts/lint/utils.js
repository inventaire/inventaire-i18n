export function mapResourceValues (resource, fn) {
  const entries = Object.entries(resource).map(([ key, value ]) => {
    if (value == null) {
      return [ key, value ]
    } else {
      return [ key, fn(value, key) ]
    }
  })
  return Object.fromEntries(entries)
}
