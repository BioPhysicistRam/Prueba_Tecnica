const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 */

router.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router; // <-- muy importante
