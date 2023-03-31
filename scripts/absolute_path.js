import { fileURLToPath } from 'node:url'

export const projectRoot = fileURLToPath(new URL('..', import.meta.url))

const folders = {
  root: projectRoot.replace(/\/$/, ''),
  src: `${projectRoot}src`,
}

export function absolutePath (folderAlias, filePath) {
  const folder = folders[folderAlias]
  if (!folder) throw new Error(`folder not found: ${folderAlias}`)
  return `${folder}/${filePath}`
}
