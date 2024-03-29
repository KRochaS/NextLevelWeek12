import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import swagger from '@fastify/swagger'
import { resolve } from 'node:path'
import { prisma } from './lib/prisma'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'

const app = require('fastify')()

app.register(multipart)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true, // todas as URL`s de front poderão acessar o backend
  // origin: ['http://localhost:3333', 'https://rocketseat.com.br']
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(swagger, {
  swagger: {
    info: {
      title: 'API NLW Spacetime',
      description:
        'Memory recall application, where the user can add texts and photos of events in his life to a timeline, organized by month and year.',
      version: '0.0.1',
    },
    produces: ['application/json'],
    consumes: ['application/json'],
    securityDefinitions: {
      BearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Bearer token',
      },
    },
    security: [{ BearerAuth: [] }],
  },
  exposeRoute: true,
})

app.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs',
  staticCSP: true,
})

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

// registrar um arquivo separado
app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
