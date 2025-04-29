# Prueba Técnica - Microservicio API REST & GraphQL

Este proyecto es un microservicio.

Incluye:
- API REST documentada con Swagger (OpenAPI 3.0)
- API GraphQL para consultas dinámicas
- Programación Orientada a Objetos (POO) con patrón Singleton
- Conexión a base de datos SQLite mediante Prisma ORM
- Validaciones de entrada en las rutas
- CORS restringido al dominio `http://example.com`
- Entorno de desarrollo rápido con nodemon

---

## 🚀 Tecnologías Utilizadas

- Node.js
- Express
- Prisma + SQLite
- GraphQL
- Swagger / OpenAPI
- Nodemon

---

## 📦 Instalación

1. Clonar el repositorio o descargar los archivos.
2. Instalar las dependencias:

```bash
npm install
Configurar la base de datos SQLite:

bash
Copiar código
npx prisma migrate dev --name init
Insertar un usuario de prueba:

bash
Copiar código
node scripts/seed.js
🛠 Scripts disponibles
npm start: Inicia el servidor en modo producción.

npm run dev: Inicia el servidor en modo desarrollo usando nodemon.

🧪 Uso
API REST
GET /users/:id
Consulta un usuario por su ID.

Documentación disponible en:
http://localhost:3000/api-docs

API GraphQL
Acceder al playground en:
http://localhost:3000/graphql

Consulta ejemplo:

graphql
Copiar código
query {
  user(id: 1) {
    id
    nombre
  }
}

Notas
El servidor solo acepta tráfico desde http://example.com (CORS configurado).

El servidor sigue una estructura modular para facilitar la escalabilidad.

Se validan entradas para mejorar la robustez de la API.
