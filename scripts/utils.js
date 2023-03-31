import { readFile } from 'node:fs/promises'
import { absolutePath } from '#scripts/absolute_path'

export const uniq = array => Array.from(new Set(array))

export const sortPropertiesByNumericId = (a, b) => parseInt(a.substring(1)) - parseInt(b.substring(1))

export async function getComponentWikidataPropertiesIds (component) {
  const text = await readFile(`./src/${component}/keys_translated_from_wikidata`, 'utf-8')
  return text.trim().split('\n')
}

async function readJsonFile (jsonFilePath) {
  const json = await readFile(jsonFilePath, 'utf-8')
  return JSON.parse(json)
}

export async function readSrcFile (srcFilePath) {
  const path = absolutePath('src', srcFilePath)
  return readJsonFile(path)
}
