// import IEvent from "../types/IEvent"

export default {
    querystring: {
        name: { type: "string" },
        excitement: { type: "integer" },
    },
    // body: {
    //     type: 'object',

    // },
    response: {
        200: {
            type: "array",
            properties: {
                events: { type: "object" },
            },
        },
        201: {
            type: "object",
            properties: {
                event: { type: "object" },
            },
        },
    },
}
