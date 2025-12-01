/**
 * @swagger
 * tags:
 *   name: Order
 *   description: API de gerenciamento de pedidos
 */

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");


// Criar pedido
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *                 example: "v10000001xyz"
 *               valorTotal:
 *                 type: number
 *                 example: 1500
 *               dataCriacao:
 *                 type: string
 *                 example: "2023-07-20T10:00:00Z"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                       example: "1234"
 *                     quantidadeItem:
 *                       type: number
 *                       example: 2
 *                     valorItem:
 *                       type: number
 *                       example: 750
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       500:
 *         description: Erro ao criar pedido
 */

router.post("/", orderController.create);

// Buscar pedido por número
/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Retorna um pedido pelo número
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "v10000001xyz"
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro ao buscar pedido
 */

router.get("/:id", orderController.findOne);

// Listar todos
/**
 * @swagger
 * /order/list/all:
 *   get:
 *     summary: Lista todos os pedidos cadastrados
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *       500:
 *         description: Erro ao listar pedidos
 */

router.get("/list/all", orderController.list);

// Atualizar pedido
/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualiza um pedido existente
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "v10000001xyz"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *                 example: "v10000001xyz"
 *               valorTotal:
 *                 type: number
 *                 example: 2000
 *               dataCriacao:
 *                 type: string
 *                 example: "2023-07-20T10:00:00Z"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                       example: "9999"
 *                     quantidadeItem:
 *                       type: number
 *                       example: 5
 *                     valorItem:
 *                       type: number
 *                       example: 400
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro ao atualizar pedido
 */

router.put("/:id", orderController.update);

// Remover pedido
/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Remove um pedido pelo número
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "v10000001xyz"
 *     responses:
 *       200:
 *         description: Pedido removido com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro ao remover pedido
 */

router.delete("/:id", orderController.delete);

module.exports = router;
