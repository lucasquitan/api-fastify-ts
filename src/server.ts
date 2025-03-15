import fastify from 'fastify'

import { env } from './env'
import { userRoutes } from './routes/users'

const server = fastify()

server.register(userRoutes, { prefix: 'users' })

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is Running')
  })
