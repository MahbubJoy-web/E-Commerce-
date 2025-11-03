const express = require('express')
const { addProductCart, deleteProduct, getCartProducts, updateproductQTY } = require('../../Controllers/cartController')
const cartRouter = express.Router()


cartRouter.post('/addCart', addProductCart)
cartRouter.post('/deleteCart', deleteProduct)
cartRouter.get('/getcarts/:userId' , getCartProducts)
cartRouter.post('/updateQTY' , updateproductQTY)

module.exports = cartRouter