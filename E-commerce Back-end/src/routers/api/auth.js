const express = require ('express')
const { registration, OtpVerification, resnedOtp, Login, getSingleUser, deleteUser, createAdminUserRole  } = require('../../Controllers/authController')
const tokenVerification = require('../../middleware/tokenVerification')
const authRoute = express.Router()
const multer  = require('multer')
const CheckUserRole = require('../../middleware/checkUseRole')
const upload = multer({ dest: 'uploads/' })

authRoute.post('/registraion' , registration)
authRoute.post('/otpVerification' , OtpVerification)
authRoute.post('/resendOtp' , resnedOtp)
authRoute.post('/login' , Login)
authRoute.get('/getSingleUser', tokenVerification, getSingleUser)
authRoute.post('/deleteUser', tokenVerification, CheckUserRole(['admin']) ,deleteUser)  // Only Admin can Delete Staff Account otherwise staff can't do this
authRoute.post('/promoteToStaff', tokenVerification, CheckUserRole(['admin']) , createAdminUserRole)

module.exports = authRoute