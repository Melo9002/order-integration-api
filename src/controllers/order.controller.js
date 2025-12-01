const Order = require("../models/order.model");

// Transformar JSON de entrada → JSON para o banco
function mapOrderInput(data) {
  return {
    orderId: data.numeroPedido,
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),
    items: data.items.map(item => ({
      productId: parseInt(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
}

module.exports = {
  // Criar pedido
  async create(req, res) {
    try {
      const mappedData = mapOrderInput(req.body);

      const order = await Order.create(mappedData);

      return res.status(201).json(order);
    } catch (error) {
      console.error("Erro ao criar pedido:", error.message);
      return res.status(500).json({ error: "Erro ao criar pedido." });
    }
  },

  // Buscar pedido por número
  async findOne(req, res) {
    try {
      const orderId = req.params.id;

      const order = await Order.findOne({ orderId });

      if (!order) {
        return res.status(404).json({ error: "Pedido não encontrado." });
      }

      return res.status(200).json(order);
    } catch (error) {
      console.error("Erro ao buscar pedido:", error.message);
      return res.status(500).json({ error: "Erro ao buscar pedido." });
    }
  },

  // Listar todos os pedidos
  async list(req, res) {
    try {
      const orders = await Order.find();
      return res.status(200).json(orders);
    } catch (error) {
      console.error("Erro ao listar pedidos:", error.message);
      return res.status(500).json({ error: "Erro ao listar pedidos." });
    }
  },

  // Atualizar pedido
  async update(req, res) {
    try {
      const orderId = req.params.id;

      const mappedData = mapOrderInput(req.body);

      const updated = await Order.findOneAndUpdate(
        { orderId },
        mappedData,
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ error: "Pedido não encontrado." });
      }

      return res.status(200).json(updated);
    } catch (error) {
      console.error("Erro ao atualizar pedido:", error.message);
      return res.status(500).json({ error: "Erro ao atualizar pedido." });
    }
  },

  // Remover pedido
  async delete(req, res) {
    try {
      const orderId = req.params.id;

      const deleted = await Order.findOneAndDelete({ orderId });

      if (!deleted) {
        return res.status(404).json({ error: "Pedido não encontrado." });
      }

      return res.status(200).json({ message: "Pedido removido com sucesso." });
    } catch (error) {
      console.error("Erro ao remover pedido:", error.message);
      return res.status(500).json({ error: "Erro ao remover pedido." });
    }
  }
};
