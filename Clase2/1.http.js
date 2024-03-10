const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.port ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen-super-bonita.png') {
    res.setHeader('Content-Type', 'image/png')

    fs.readFile('./manchita.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'Image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>Error 404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
