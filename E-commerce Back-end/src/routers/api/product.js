const express = require('express')
const { add_catagory, upload_product } = require('../../Controllers/productController')
const productRoute = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const tokenVerification = require('../../middleware/tokenVerification')
const CheckUserRole = require('../../middleware/checkUseRole')
const uploadMiddleware = upload.fields([{ name: 'thumnailImage', maxCount: 1 }, { name: 'subImage', maxCount: 8 }])

productRoute.post('/addCatagory',tokenVerification, CheckUserRole(['admin' , 'staff']),upload.single('catagoryImage'), add_catagory)
productRoute.post('/uploadProduct',tokenVerification, CheckUserRole(['admin' , 'staff']) ,uploadMiddleware, upload_product)


module.exports = productRoute