const convertMarkdown = require('./convert_markdown')
const enValues = require('../../../src/client/en.json')

module.exports = lang => {
  const langValues = require(`../../../src/client/${lang}.json`)
  const distValues = {}

  for (const key in enValues) {
    const enValue = enValues[key]
    const langValue = langValues[key]
    distValues[key] = convertMarkdown(langValue || enValue)
  }

  return distValues
}
