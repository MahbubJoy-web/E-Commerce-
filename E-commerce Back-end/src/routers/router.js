const express = require('express')
const authRoute = require('./api/auth')
const productRoute = require('./api/product')
const routers = express.Router()


routers.use('/auth' , authRoute)
routers.use('/product', productRoute)


module.exports = routers