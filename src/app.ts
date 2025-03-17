import fastify from 'fastify'

import { userRoutes } from './routes/users'

export const app = fastify()

/**
 * Add a simple hook to log all requests
 */
app.addHook('onResponse', async (request, reply) => {
  console.log(
    `${new Date().toUTCString()} | ${request.method} ${request.url} | FROM ${request.ip} | STATUS ${reply.statusCode}`,
  )
})

app.register(userRoutes, { prefix: 'users' })
