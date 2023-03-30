const { readFileSync } = require('fs')

module.exports = {
  uniq: array => Array.from(new Set(array)),

  sortPropertiesByNumericId: (a, b) => parseInt(a.substring(1)) - parseInt(b.substring(1)),

  getComponentWikidataPropertiesIds: component => {
    return readFileSync(`./src/${component}/keys_translated_from_wikidata`)
    .toString()
    .trim()
    .split('\n')
  },
}
