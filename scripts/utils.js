module.exports = {
  uniq: array => Array.from(new Set(array)),

  pick: (obj, props) => {
    const picked = {}
    props.forEach(prop => {
      picked[prop] = obj[prop]
    })
    return picked
  },

  sortPropertiesByNumericId: (a, b) => parseInt(a.substring(1)) - parseInt(b.substring(1)),
}
