import { app } from '../app'
import { beforeEach, afterAll, beforeAll, it } from 'vitest'
import request from 'supertest'

import { execSync } from 'node:child_process'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

beforeEach(async () => {
  execSync('npm run knex migrate:rollback --all')
  execSync('npm run knex migrate:latest')
})

it('should be able to create a new User', async () => {
  await request(app.server)
    .post('/users')
    .send({
      name: 'John Doe',
      cpf: '00000000001',
      phone: '552100000000',
    })
    .expect(201)
})

it('should be able to obtain all Users', async () => {
  await request(app.server).get('/users').expect(200)
})

it('should be able to get a specific User by CPF', async () => {
  await request(app.server).post('/users').send({
    name: 'John Doe',
    cpf: '00000000001',
    phone: '552100000000',
  })

  await request(app.server).get('/users?cpf=00000000001').expect(200)
})

it('should be able to delete a User by CPF', async () => {
  await request(app.server).post('/users').send({
    name: 'John Doe',
    cpf: '0000000001',
    phone: '552100000000',
  })

  await request(app.server).delete('/users/0000000001').expect(204)
})

it('should be able to delete a User by ID', async () => {
  await request(app.server).post('/users').send({
    name: 'John Doe',
    cpf: '1000000001',
    phone: '552100000012',
  })

  const { id } = await request(app.server)
    .get('/users?cpf=1000000001')
    .then((response) => response.body)

  await request(app.server).delete(`/users/${id}`).expect(204)
})
