const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BBVA Prueba Técnica API',
            version: '1.0.0',
            description: 'API REST para consultar usuarios',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/restRoutes.js'], // donde escribiremos las anotaciones de swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
