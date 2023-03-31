#!/usr/bin/env node
import { writeFile } from 'node:fs/promises'
import fetch from 'node-fetch'
import { green } from 'tiny-chalk'
import wdk from 'wikibase-sdk/wikidata.org'
import { uniq, sortPropertiesByNumericId, getComponentWikidataPropertiesIds } from '#scripts/utils'
import { activeLanguages } from '#assets/active_languages'

const { getManyEntities } = wdk

const serverProperties = await getComponentWikidataPropertiesIds('server')
const clientProperties = await getComponentWikidataPropertiesIds('client')
const properties = uniq(serverProperties.concat(clientProperties)).sort(sortPropertiesByNumericId)

const urls = getManyEntities({ ids: properties, languages: activeLanguages, props: 'labels' })

const labelPerLanguage = {}
activeLanguages.forEach(lang => labelPerLanguage[lang] = {})

async function getData () {
  const allProperties = {}
  for (const url of urls) {
    const { entities } = await fetch(url).then(res => res.json())
    Object.assign(allProperties, entities)
  }
  return allProperties
}

function prepareForSave (allProperties) {
  for (const propertyId in allProperties) {
    const { labels } = allProperties[propertyId]
    for (const lang of activeLanguages) {
      const label = labels[lang] != null ? labels[lang].value : null
      labelPerLanguage[lang][propertyId] = label
    }
  }
}

async function saveTranslationFiles () {
  await Promise.all(activeLanguages.map(async lang => {
    const data = labelPerLanguage[lang]
    await writeFile(`src/wikidata/${lang}.json`, JSON.stringify(data, null, 2) + '\n')
    console.log(green(`fetched: wikidata - ${lang}`))
  }))
}

await getData()
.then(prepareForSave)
.then(saveTranslationFiles)
