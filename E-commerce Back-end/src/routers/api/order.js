const express = require('express')
const tokenVerification = require('../../middleware/tokenVerification')
const CheckUserRole = require('../../middleware/checkUseRole')
const { addorder } = require('../../Controllers/orderController')
const orderRouter = express.Router()

orderRouter.post('/addOder' , addorder)

module.exports = orderRouter
