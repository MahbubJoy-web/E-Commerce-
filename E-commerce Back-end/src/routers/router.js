const express = require('express')
const authRoute = require('./api/auth')
const productRoute = require('./api/product')
const cartRouter = require('./api/cart')
const cuponRouter = require('./api/cupon')
const orderRouter = require('./api/order')
const routers = express.Router()


routers.use('/auth' , authRoute)
routers.use('/product', productRoute)
routers.use('/cart' , cartRouter)
routers.use('/cupon' , cuponRouter)
routers.use('/order' , orderRouter)

module.exports = routers