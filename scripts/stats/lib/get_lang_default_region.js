// This language+region code seems to be based on ISO 3166-1 https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// Regions that aren't `${lang}_${lang.toUpperCase()}`
const specialCaseRegions = {
  da: 'da_DK',
  en: 'en_US',
  ja: 'ja_JP',
  no: 'nb_NO',
  sv: 'sv_SE',
  zh: 'zh_CN',
}

export function getLangDefaultRegion (lang) {
  return specialCaseRegions[lang] || `${lang}_${lang.toUpperCase()}`
}
