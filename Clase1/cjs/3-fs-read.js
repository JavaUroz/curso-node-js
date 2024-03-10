const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (_err, text) => {
  console.log(text)
})

console.log('Hacer esto mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (_err, text) => {
  console.log(text)
})
