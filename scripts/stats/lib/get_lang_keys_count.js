const weblateComponents = [ 'server', 'client' ]

module.exports = lang => {
  const translatedResourcesCount = getResourcesTranslatedCount(lang)
  const wikidataTranslatedPropertiesCount = countTranslatedWikidataProperties(lang)
  return translatedResourcesCount + wikidataTranslatedPropertiesCount
}

const getResourcesTranslatedCount = lang => {
  return weblateComponents
  .map(getCount(lang))
  .reduce(sum, 0)
}

const getCount = lang => component => {
  const data = require(`../../../src/${component}/${lang}.json`)
  return nonEmptyStringValuesCount(data)
}

const sum = (total, next) => total + next

const countTranslatedWikidataProperties = lang => {
  const data = require(`../../../src/wikidata/${lang}.json`)
  return nonEmptyStringValuesCount(data)
}

const nonEmptyStringValuesCount = obj => {
  return Object.values(obj)
  .filter(isNonEmptyString)
  .length
}

const isNonEmptyString = str => (typeof str === 'string') && (str.length > 0)
