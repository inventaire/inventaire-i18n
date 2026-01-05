import { mapResourceValues } from './utils.js'

export default function (resource) {
  return mapResourceValues(resource, lintFrenchValue)
}

function lintFrenchValue (value) {
  return value
    .replace(/•/g, '·')

    .replace(/oeuvre/g, 'œuvre')
    .replace(/Oeuvre/g, 'Œuvre')

    // Écriture inclusive
    .replace(/auteur(e)/g, 'auteur·ice')
    .replace(/(au|crea|utilisa)teur ou (au|crea|utilisa)trice/g, '$1teur·ice')
    .replace(/un (au|crea|utilisa)teur/g, 'un·e $1teur·ice')
    .replace(/(au|crea|utilisa)teur([^·])/g, "$1teur·ice$2")
    .replace(/(au|crea|utilisa)teur$/g, "$1teur·ice")

    // Add missing non-breaking spaces
    .replace(/([^\s])\s+([:;?!])/g, '$1 $2')

    // Harmonize apostrophies
    .replace(/’/g, "'")

    // Add missing "^" in "tâche"
    .replace(/(t)ache(s?)/ig, '$1âche$2')
}
