import { convertMarkdown } from '#scripts/build/lib/convert_markdown'
import { readSrcFile } from '#scripts/utils'

export async function getComponentValues ({ component, lang }) {
  const enValues = await readSrcFile(`${component}/en.json`)
  let langValues = {}
  if (lang !== 'en') {
    langValues = await readSrcFile(`${component}/${lang}.json`)
  }
  const distValues = {}

  for (const key in enValues) {
    const enValue = enValues[key]
    const langValue = langValues[key]
    distValues[key] = convertMarkdown(langValue || enValue)
  }

  return distValues
}
