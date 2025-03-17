import fastify from 'fastify'

import { env } from './env'
import { userRoutes } from './routes/users'

const server = fastify()

/**
 * Add a simple hook to log all requests
 */
server.addHook('onResponse', async (request, reply) => {
  console.log(
    `${new Date().toUTCString()} | ${request.method} ${request.url} | FROM ${request.ip} | STATUS ${reply.statusCode}`,
  )
})

server.register(userRoutes, { prefix: 'users' })

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running')
  })
