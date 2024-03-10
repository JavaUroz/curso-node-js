const { readFile } = require('node:fs/promises')

// IIFE Inmediatly Invoqued Function Expression
;(
  async () => {
    console.log('Leyendo el primer archivo...')
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log(text)
    console.log('Hacer esto mientras se lee el archivo...')
    console.log('Leyendo el segundo archivo...')
    const seccondText = await readFile('./archivo2.txt', 'utf-8')
    console.log(seccondText)
  })()
