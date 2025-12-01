const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/orderdb");

    console.log("MongoDB conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error.message);
  }
}

module.exports = connectDB;
