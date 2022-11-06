import fastify, { FastifyInstance } from "fastify"
import eventRoute from "./routes/event"

// define your routes in one of these

const server: FastifyInstance = fastify({
    logger: true,
})

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

    server.register(eventRoute, { prefix: "events" })

    server.get("/", async (request, reply) => {
        return reply.status(200).send({
            message: "Hello World!",
        })
    })

    return server
}

export { startServer }
