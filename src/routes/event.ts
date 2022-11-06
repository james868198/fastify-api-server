import { FastifyPluginCallback } from "fastify"
import EventSchema from "../schemas/Event"

const eventOptions = {
    schema: EventSchema,
}

interface PluginOptions {
    prefix: string
}

const eventRoute: FastifyPluginCallback<PluginOptions> = (fastify, request, done) => {
    fastify.get("/", eventOptions, async (request, reply) => {
        return reply.status(200).send({
            events: [
                {
                    message: "test",
                },
            ],
        })
    })

    fastify.post("/", eventOptions, async (request, reply) => {
        return reply.status(200).send({
            event: {
                message: "test",
            },
        })
    })

    done()
}
export default eventRoute
