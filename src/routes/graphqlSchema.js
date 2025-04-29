const { buildSchema } = require('graphql');
const userService = require('../services/userService');

// Definir el esquema de GraphQL
const schema = buildSchema(`
    type User {
        id: Int
        nombre: String
    }

    type Query {
        user(id: Int!): User
    }
`);

// Resolver funciones
const root = {
    user: async ({ id }) => {
        const user = await userService.getUserById(id);
        return user;
    }
};

module.exports = {
    schema,
    root
};
