const { PrismaClient } = require('@prisma/client');

class UserService {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async getUserById(id) {
        return await this.prisma.usuario.findUnique({
            where: { id: parseInt(id) }
        });
    }
}

module.exports = new UserService();
