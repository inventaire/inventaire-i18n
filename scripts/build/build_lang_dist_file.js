#!/usr/bin/env node
import { getComponentValues } from '#scripts/build/lib/get_component_values'
import { getLangWikidataValues } from '#scripts/build/lib/get_lang_wikidata_values'

const [ lang, component ] = process.argv.slice(2)
if (lang == null) throw new Error('missing lang')
if (component == null) throw new Error('missing component')

const componentValues = await getComponentValues({ component, lang })
const wikidataValues = await getLangWikidataValues({ component, lang })

const distValues = Object.assign({}, componentValues, wikidataValues)
console.log(JSON.stringify(distValues, null, 2))
