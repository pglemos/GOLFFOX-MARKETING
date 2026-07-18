const { createServer } = require('node:http')
const next = require('next')

const hostname = '0.0.0.0'
const port = Number.parseInt(process.env.PORT || '3000', 10)
const app = next({ dev: false, hostname, port, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    createServer((request, response) => handle(request, response))
      .listen(port, hostname, () => {
        console.log(`GOLFFOX marketing server listening on ${hostname}:${port}`)
      })
  })
  .catch((error) => {
    console.error('Failed to start GOLFFOX marketing server', error)
    process.exitCode = 1
  })
