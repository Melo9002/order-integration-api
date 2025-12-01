# Order Integration API  
A simple Node.js REST API created for the Jitterbit technical test.

This API allows creating, reading, updating, deleting and listing orders, with automatic payload transformation before persisting to MongoDB.  
The project uses Node.js, Express, MongoDB/Mongoose and Swagger for documentation.

---

## Features
- Create new orders  
- Retrieve an order by its ID  
- List all orders  
- Update an order  
- Delete an order  
- Automatic input → database payload mapping  
- MongoDB persistence using Mongoose  
- Swagger documentation at `/api-docs`

---

## Tech Stack
- Node.js  
- Express  
- MongoDB + Mongoose  
- Swagger UI + swagger-jsdoc  
- Nodemon (development)

---

## Installation

Clone the repository:
```bash
git clone https://github.com/your-username/order-integration-api.git
cd order-integration-api
```

Install dependencies:
```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/orderdb
```

---

## Running the server

Development mode (with Nodemon):
```bash
npm run dev
```

Production mode:
```bash
node server.js
```

Once running, the console will show messages such as:
```
Servidor rodando na porta 3000
MongoDB conectado com sucesso!
```

---

## Swagger Documentation

After the server starts, open:

```
http://localhost:3000/api-docs
```

You will see all routes documented, with request/response schemas and the ability to test directly in the browser.

---

## Endpoints

### POST /order  
Create a new order.

Example request body:
```json
{
  "numeroPedido": "v10000001xyz",
  "valorTotal": 1500,
  "dataCriacao": "2023-07-20T10:00:00.000Z",
  "items": [
    {
      "idItem": "1234",
      "quantidadeItem": 2,
      "valorItem": 750
    }
  ]
}
```

---

### GET /order/{id}  
Retrieve an order by its orderId.

---

### GET /order/list/all  
List all stored orders.

---

### PUT /order/{id}  
Update an order by its orderId.

---

### DELETE /order/{id}  
Remove an order by its orderId.

---

## Payload Transformation

Incoming request body:
```json
{
  "numeroPedido": "v10089016vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

Mapped and saved to database:
```json
{
  "orderId": "v10089016vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

## Example MongoDB Document

```json
{
  "_id": "ObjectId(...)",
  "orderId": "v10000001xyz",
  "value": 1500,
  "creationDate": "2023-07-20T10:00:00.000Z",
  "items": [
    {
      "productId": 1234,
      "quantity": 2,
      "price": 750
    }
  ],
  "__v": 0
}
```

---

## Testing

You can test the API using Swagger UI, Postman, or curl.

Example with curl:
```bash
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
  "numeroPedido": "v10000001xyz",
  "valorTotal": 1500,
  "dataCriacao": "2023-07-20T10:00:00.000Z",
  "items": [
    {"idItem": "1234", "quantidadeItem": 2, "valorItem": 750}
  ]
}'
```

---

## Project Structure

```
src/
 ├── controllers/
 │     └── order.controller.js
 ├── models/
 │     └── order.model.js
 ├── routes/
 │     └── order.routes.js
 ├── swagger/
 │     └── swagger.js
 └── server.js
```

---

## Optional Enhancements
- JWT authentication  
- Validation with Joi or Zod  
- Jest tests  
- Production Dockerfile

---

## Final Notes
This project was created for the Jitterbit technical challenge, focusing on clean architecture, clear documentation, and consistent data handling.

## Swagger Documentation

Available at:
http://localhost:3000/api-docs

This interactive documentation allows testing all endpoints directly from the browser.


