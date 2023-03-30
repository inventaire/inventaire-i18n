const convertMarkdown = require('./convert_markdown')

module.exports = ({ component, lang }) => {
  const enValues = require('../../../src/server/en.json')
  let langValues = {}
  if (lang !== 'en') {
    langValues = require(`../../../src/${component}/${lang}.json`)
  }
  const distValues = {}

  for (const key in enValues) {
    const enValue = enValues[key]
    const langValue = langValues[key]
    distValues[key] = convertMarkdown(langValue || enValue)
  }

  return distValues
}
