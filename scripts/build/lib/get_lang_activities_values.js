const enValues = require('../../../original/activities.en.json')

module.exports = lang => {
  const langValues = require(`../../../translations/activities/${lang}.json`)
  const langClientDistValues = require(`../../../dist/client/${lang}.json`)
  const distValues = {}

  for (const key in enValues) {
    // Borrowing values from the client
    const enValue = enValues[key]
    if (enValue === null) {
      distValues[key] = langClientDistValues[key]
    } else {
      const langValue = langValues[key]
      distValues[key] = langValue || enValue
    }
  }

  return distValues
}
