const Hapi = require('@hapi/hapi')
const { HOST, PORT } = require('./config/config')
const routers = require('./router/routers')

const runServer = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST
  })

  server.route(routers)
  await server.start()
  console.log(`Server Running...:${server.info.uri}`)
}

runServer()
