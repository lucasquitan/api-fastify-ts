import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'

export async function userRoutes(app: FastifyInstance) {
  /**
   * Create a new user
   */
  app.post('/', async (request, reply) => {
    const createUserSchema = z.object({
      name: z.string(),
      cpf: z.string(),
      phone: z.string(),
    })

    const { name, cpf, phone } = createUserSchema.parse(request.body)

    await knex('users').insert({
      id: crypto.randomUUID(),
      name,
      cpf,
      phone,
    })

    return reply.status(201).send()
  })

  /**
   * Get all users or user provided by CPF
   */
  app.get('/', async (request, reply) => {
    const createUserSchema = z.object({
      cpf: z.string().optional(),
    })

    const { cpf } = createUserSchema.parse(request.query)

    if (cpf === undefined) {
      const users = await knex('users').select()
      return { total: users.length, users }
    }
    const user = await knex('users').where('cpf', cpf).first()

    if (user === undefined)
      return reply.status(404).send({ message: 'User not found' })
    return user
  })

  /**
   * Delete a user by CPF or ID
   */
  app.delete('/:value', async (request, reply) => {
    const deleteUserSchema = z.object({
      value: z.string(),
    })

    const { value } = deleteUserSchema.parse(request.params)

    const user = await knex('users')
      .where('cpf', value)
      .orWhere('id', value)
      .first()

    if (user === undefined)
      return reply.status(404).send({ message: 'User not found' })

    await knex('users').where('id', user.id).delete()
    return reply.status(204).send()
  })
}
