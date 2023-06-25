/* eslint-disable prettier/prettier */

import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
// import { zodToJsonSchema} from "zod-to-json-schema";

import parseSchema from "zod-to-json-schema";

import { z } from 'zod';
export async function memoriesRoutes(app: FastifyInstance) {



    app.addHook('preHandler', async (request) => {
        await request.jwtVerify();
    })

    app.get('/memories', {
        schema: {
            description: 'list of memories',
            tags: ['memories'],
            response: {
                200: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      token: { type: 'string' },
                      id: { type: 'string' },
                      coverUrl: { type: 'string' },
                      excerpt: { type: 'string' },
                      createdAt: { type: 'string' }
                    }
                  }
                }
              }
        },

        handler: async (request) => {
            const memories = await prisma.memory.findMany({
               where: {
                    userId: request.user.sub,
               },
                orderBy: {
                    createdAt: 'asc'
                }
            })
            return memories.map((memory) => {
                return {
                  id: memory.id,
                  coverUrl: memory.coverUrl,
                  excerpt: memory.content.substring(0, 115).concat('...'),
                  createdAt: memory.createdAt,
                }
              })
            }
            })


    const paramsSchemaGetMemory = z.object({
        id: z.string().uuid(),
    })
    app.get('/memories/:id', {
        schema: {
            description: 'Gets a only memory',
            tags: ['memories'],
            params: parseSchema(paramsSchemaGetMemory),
            response: {
                200: {
                    type: 'object',
                    properties: {
                          token: { type: 'string' },
                        id: { type: 'string' },
                        coverUrl: { type: 'string' },
                        excerpt: { type: 'string' },
                        createdAt: { type: 'string' }
                    },
                },
            },
        },
        handler: async (request, reply) => {
            const { id } = paramsSchema.parse(request.params);

            const memory = await prisma.memory.findUniqueOrThrow({
                where: { id },
            });

            if (!memory.isPublic && memory.userId !== request.user.sub) {
                return reply.status(401).send();
            }

            return memory;
        },
    });


    const bodySchema = z.object({
        content: z.string(),
        coverUrl: z.string(),
        createdAt: z.string(),
        isPublic: z.coerce.boolean().default(false)
    })

    app.post('/memories', {
        schema: {
            description: 'Save a memory',
            tags: ['memories'],
            body: parseSchema(bodySchema),
        },
        handler: async (request) => {
            const { content, coverUrl, isPublic, createdAt } = bodySchema.parse(request.body);

            const memory = await prisma.memory.create({
                data: {
                    content,
                    coverUrl,
                    isPublic,
                    createdAt,
                    userId: request.user.sub,
                },
            });

            return memory;
        },
    });

    const paramsSchemaMemory = z.object({
        id: z.string().uuid(),
    })
    app.put('/memories/:id', {
        schema: {
            description: 'Update a memory',
            tags: ['memories'],
            params: parseSchema(paramsSchemaMemory),
        },
        handler: async (request, reply) => {


            const { id } = paramsSchema.parse(request.params)

            const bodySchema = z.object({
                content: z.string(),
                coverUrl: z.string(),
                isPublic: z.coerce.boolean().default(false)
            })

            const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

            let memory = await prisma.memory.findUniqueOrThrow({
                where: {
                    id,
                }
            })

            if (memory.userId !== request.user.sub) {
                return reply.status(401).send();
            }

            memory = await prisma.memory.update({
                where: {
                    id,
                },
                data: {
                    content,
                    coverUrl,
                    isPublic
                }
            })

            return memory
        }
    })


    const paramsSchema = z.object({
        id: z.string().uuid(),
    })

    app.delete('/memories/:id', {

        schema: {
            description: 'Delete a memory',
            tags: ['memories'],
            params: parseSchema(paramsSchema),
        },
        handler: async (request, reply) => {
            const { id } = paramsSchema.parse(request.params);

            const memory = await prisma.memory.findUniqueOrThrow({
                where: {
                    id,
                },
            });

            if (memory.userId !== request.user.sub) {
                return reply.status(401).send();
            }

            await prisma.memory.delete({
                where: { id },
            });
        },
    });
}
