
import { getComponentWikidataPropertiesIds } from '#scripts/utils'
import { readSrcFile } from '#scripts/utils'

const enValues = await readSrcFile(`wikidata/en.json`)
const propertiesLists = {
  server: await getComponentWikidataPropertiesIds('server'),
  client: await getComponentWikidataPropertiesIds('client'),
}

export async function getLangWikidataValues ({ component, lang }) {
  const langValues = await readSrcFile(`wikidata/${lang}.json`)

  const distValues = {}
  const propertiesList = propertiesLists[component]

  for (const prop of propertiesList) {
    distValues[prop] = langValues[prop] || enValues[prop]
  }

  return distValues
}
