const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gandeur API Documentation f',
      version: '1.0.0',
      description: 'API documentation for my Gandeur ecommerce'
    },
    servers: [
      {
        url: 'https://ecombackend-vdz1.onrender.com' // Change to your real server URL
      }
    ]
  },

  // Path where your route files are located
  apis: ['./routers/*.js']
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = { swaggerUi, swaggerSpec }
