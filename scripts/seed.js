const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.usuario.create({
        data: {
            nombre: 'Ramon Santos'
        }
    });

    console.log('Usuario creado:', user);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
