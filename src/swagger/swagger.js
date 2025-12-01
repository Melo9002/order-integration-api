const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order Integration API",
      version: "1.0.0",
      description: "API para integração de pedidos (Desafio Jitterbit)"
    }
  },
  apis: ["./src/routes/*.js"], // onde o swagger vai procurar comentários
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger disponível em http://localhost:3000/api-docs");
}

module.exports = swaggerDocs;
