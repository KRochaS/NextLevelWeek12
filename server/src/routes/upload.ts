/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify';
import { randomUUID } from 'node:crypto';
import { createWriteStream } from 'node:fs';
import { extname, resolve } from 'node:path';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const pump = promisify(pipeline) // pipeline - verifica o processo
                                // de stream

export async function uploadRoutes(app: FastifyInstance) {
    app.post('/upload',  {
       schema: {
        description: 'Upload de Imagem',
        tags: ['Autentication'],
        hide: true,
        response: {
            200: {      
              type: 'object',
              properties: {
                fileUrl: { type: 'string' },
              },
            },
          },
       },
        handler: async (request, reply) => {
        const upload = await request.file({
            limits: {
                fileSize: 5_242_880 // 5mb
            }
        })

        if(!upload) {
            return reply.status(400).send()
        }

        const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/;
        const isValidFileFormat = mimeTypeRegex.test(upload.mimetype);
    
        if (!isValidFileFormat) {
          return reply.status(400).send();
        }

        const fileId = randomUUID()
        const extension = extname(upload.filename);

        const filename = fileId.concat(extension)

        const writeStream = createWriteStream(
            resolve(__dirname, '../../uploads', filename)
        )

        // Amazon S3, Google GCS, CloudFlare R2

        await pump(upload.file, writeStream)

        const fullUrl = request.protocol.concat('://').concat(request.hostname)

        const fileUrl = new URL(`/uploads/${filename}`, fullUrl).toString()
        return {
            fileUrl
        }
    }})
}
