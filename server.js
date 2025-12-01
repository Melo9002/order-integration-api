const express = require("express");
const cors = require("cors");
const app = express();
const swaggerDocs = require("./src/swagger/swagger");


// Conexão com o banco
const connectDB = require("./src/database/mongo");

// Rotas
const orderRoutes = require("./src/routes/order.routes");

// Middlewares
app.use(cors());
app.use(express.json());

swaggerDocs(app);

connectDB();

// Registrar rotas
app.use("/order", orderRoutes);

// Porta padrão
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
