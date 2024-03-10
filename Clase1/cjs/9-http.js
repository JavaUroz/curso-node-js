const http = require('node:http')
const { findAvailablePort } = require('./10-free-port')

console.log(process.env)

const desiredPort = process.env.port ?? 3000
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
