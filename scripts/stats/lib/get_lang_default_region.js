// Regions that aren't "#{lang}_#{lang.toUpperCase()}"
const specialCaseRegions = {
  da: 'da_DK',
  en: 'en_US',
  ja: 'ja_JP',
  no: 'nb_NO',
  sv: 'sv_SE',
}

export function getLangDefaultRegion (lang) {
  return specialCaseRegions[lang] || `${lang}_${lang.toUpperCase()}`
}
