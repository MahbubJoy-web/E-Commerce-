const express = require('express')
const { cuponCode, updateCupon, deleteCupon } = require('../../Controllers/cuponController')
const tokenVerification = require('../../middleware/tokenVerification')
const CheckUserRole = require('../../middleware/checkUseRole')
const cuponRouter = express.Router()


cuponRouter.post('/cuponCode',tokenVerification, CheckUserRole(['admin']) , cuponCode)
cuponRouter.post('/updateCupon',tokenVerification, CheckUserRole(['admin']) , updateCupon)
cuponRouter.post('/deleteCupon',tokenVerification, CheckUserRole(['admin']) , deleteCupon)

module.exports = cuponRouter