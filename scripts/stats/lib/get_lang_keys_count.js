import { readSrcFile } from '#scripts/utils'

export async function getLangKeysCount (lang) {
  const translatedResourcesCount = await getResourcesTranslatedCount(lang)
  const wikidataTranslatedPropertiesCount = await countTranslatedWikidataProperties(lang)
  return translatedResourcesCount + wikidataTranslatedPropertiesCount
}

async function getResourcesTranslatedCount (lang) {
  const [ serverValuesCount, clientValuesCount ] = await Promise.all([
    getCount('server', lang),
    getCount('client', lang),
  ])
  return serverValuesCount + clientValuesCount
}

async function getCount (component, lang) {
  const data = await readSrcFile(`${component}/${lang}.json`)
  return nonEmptyStringValuesCount(data)
}

async function countTranslatedWikidataProperties (lang) {
  const data = await readSrcFile(`wikidata/${lang}.json`)
  return nonEmptyStringValuesCount(data)
}

const nonEmptyStringValuesCount = obj => {
  return Object.values(obj)
  .filter(isNonEmptyString)
  .length
}

const isNonEmptyString = str => (typeof str === 'string') && (str.length > 0)
