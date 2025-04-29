// src/server.js
const express = require('express');
const cors = require('cors');
const restRoutes = require('./routes/restRoutes');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./routes/graphqlSchema');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');

class AppServer {
    static instance;

    constructor() {
        if (AppServer.instance) {
            return AppServer.instance;
        }

        this._app = express(); // atributo privado

        this._config();
        this._routes();

        AppServer.instance = this;
    }

    _config() {
        // solo aceptar tráfico de example.com
        this._app.use(cors({
            origin: 'http://example.com'
        }));

        // middleware para parsear JSON
        this._app.use(express.json());
        this._app.use(restRoutes);
        this._app.use('/graphql', graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: true // Activar interfaz GraphiQL para pruebas
        }));
        this._app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

        
    }

    _routes() {
        this._app.get('/ping', (req, res) => {
            res.json({ message: 'pong' });
        });
    }

    get app() {
        return this._app;
    }
}


module.exports = AppServer;
