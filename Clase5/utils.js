// como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// como leer un json en ESModules recomendado por ahora
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require(path)