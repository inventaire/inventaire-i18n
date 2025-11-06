import { mapResourceValues } from './utils.js'

export default function (resource) {
  return mapResourceValues(resource, lintFrenchValue)
}

function lintFrenchValue (value) {
  return value
    .replace(/•/g, '·')

    .replace(/oeuvre/g, 'œuvre')
    .replace(/Oeuvre/g, 'Œuvre')

    .replace(/auteur(e)/g, 'auteur·ice')
    .replace(/auteur ou autrice/g, 'auteur·ice')
    .replace(/un auteur/g, 'un·e auteur·ice')
    .replace(/l['’]auteur([^·])/g, 'l’auteur·ice$1')
    .replace(/l['’]auteur$/g, 'l’auteur·ice')

    .replace(/un utilisateur/g, 'un·e utilisateur·ice')
    .replace(/l['’]utilisateur([^·])/g, 'l’utilisateur·ice$1')
    .replace(/l['’]utilisateur$/g, 'l’utilisateur·ice')

    .replace(/([^\s])\s+([:;?!])/g, '$1 $2')
    .replace(/(\w)'(\w)/g, '$1’$2')
}
