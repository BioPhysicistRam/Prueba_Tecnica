// index.js
const AppServer = require('./src/server');

const server = new AppServer();

server.app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000 🚀');
});
