const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
});

const OrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  },
  items: {
    type: [ItemSchema],   // array de itens
    required: true
  }
});

// collection: "orders"
module.exports = mongoose.model("Order", OrderSchema);
