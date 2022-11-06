import fastify, { FastifyInstance } from "fastify"

const server: FastifyInstance = fastify()

const startServer: (port: number) => FastifyInstance = (port) => {
    const listenAddress = "0.0.0.0"
    const fastifyConfig = {
        port: port,
        host: listenAddress,
    }

    server.listen(fastifyConfig, (error, _) => {
        if (error) {
            console.error(error)
        }
    })

    server.get("/", async (request, reply) => {
        return reply.status(200).send({
            message: "Hello World!",
        })
    })

    return server
}

export { startServer }
