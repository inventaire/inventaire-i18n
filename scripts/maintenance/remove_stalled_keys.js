// import { createRequire } from 'node:module'
// // Importing JSON is experimental until Node v23.1.0 https://nodejs.org/api/esm.html#import-assertions
// // so ESlint doesn't support it and complains with "Parsing error: Unexpected token assert"
// // thus this work around to require json files the old CommonJS way
// // See https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
// // Expects an absolute path
// export const requireJson = createRequire(import.meta.url)

import serverEnStrings from '../../src/server/en.json' with { type: 'json' }
import clientEnStrings from '../../src/client/en.json' with { type: 'json' }

const activeServerKeys = new Set(Object.keys(serverEnStrings))
const activeClientKeys = new Set(Object.keys(clientEnStrings))

export function removeServerStaledKeys (resource) {
  const entries = Object.entries(resource).filter(isActiveServerKey)
  return Object.fromEntries(entries)
}

export function removeClientStaledKeys (resource) {
  const entries = Object.entries(resource).filter(isActiveClientKey)
  return Object.fromEntries(entries)
}


function isActiveServerKey ([ key, value ]) {
  return activeServerKeys.has(key) && value != null
}

function isActiveClientKey ([ key, value ]) {
  return activeClientKeys.has(key) && value != null
}
