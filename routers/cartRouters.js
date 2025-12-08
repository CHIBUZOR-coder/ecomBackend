const express = require('express')
const {
  addToCart,
  getCart,
  updateCart,
  deleteCart
} = require('../controllers/cartController')
const { isUser } = require('../middleware/auth')
const cartRouter = express.Router()

/**
 * @swagger
 * /addToCart:
 *   post:
 *     summary:
 *     tags:
 *       - Carts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                userid:
 *                 type: string
 *                productid:
 *                  type: string
 *                color:
 *                  type: string
 *                size:
 *                  type: string
 *                quantity:
 *                  type: string
 *     responses:
 *       200:
 *         description:
 */
cartRouter.post('/addcart', isUser, addToCart)

cartRouter.get('/getcart/:userid', isUser, getCart)

cartRouter.patch('/updatecart', isUser, updateCart)

cartRouter.delete('/deletecart', isUser, deleteCart)

module.exports = cartRouter
