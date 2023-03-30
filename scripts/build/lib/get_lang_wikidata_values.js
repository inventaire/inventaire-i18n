
const enValues = require('../../../src/wikidata/en.json')
const { getComponentWikidataPropertiesIds } = require('../../utils')
const propertiesLists = {
  server: getComponentWikidataPropertiesIds('server'),
  client: getComponentWikidataPropertiesIds('client'),
}

module.exports = ({ component, lang }) => {
  const langValues = require(`../../../src/wikidata/${lang}.json`)

  const distValues = {}
  const propertiesList = propertiesLists[component]

  for (const prop of propertiesList) {
    distValues[prop] = langValues[prop] || enValues[prop]
  }

  return distValues
}
