const cuponSchema = require("../model/cuponSchema")
const cartShema = require("../model/cartShema")
const { generateOTPNumber } = require("../helpers/allGenarator")
const orderShema = require("../model/orderShema")
const invoiceTemplate = require("../helpers/invoiceTemplate")
const { mailSender } = require("../helpers/otpSender")


const addorder = async (req, res)=>{
    
    const{customerName ,customerPhone, customerEmail, district, cartId, address, cuponCode, comments} = req.body

    if(!customerName || !customerPhone || !customerEmail || !district || !cartId) return res.status(401).send('Please Provide all Required Details')

    const existCupon = await  cuponSchema.findOne({cuponCode})
     
    const existCart = await  cartShema.findOne({_id: cartId}).populate('productItems.productId')

    if(!existCart) return res.status(404).send('Please Add A Product in cart first')
    
    // ============total cost==========

    const cartProductCost = existCart.productItems.reduce((sum, no)=>{
        return sum+ no.productId.discountPrice * no.qty
    },0)

    let shippingCost = 120

    if(district == 'Dhaka') shippingCost = 80

    const total = cartProductCost+ shippingCost - existCupon.discountPrice || 0

    const orderId = generateOTPNumber()

    const orderDate = new Date()

    await new orderShema ({
        customerName,
        customerPhone,
        customerEmail,
        district, 
        cartId,
        address,
        cuponCode, 
        comments,
        shippingCost,
        total,
        orderId,
        orderDate

    }).save()
    

    mailSender(customerEmail , invoiceTemplate(customerName ,customerPhone, address,orderId, existCart, orderDate.toLocaleString("en-BD", { timeZone: "Asia/Dhaka" }),cartProductCost,existCupon.discountPrice || 0, shippingCost, total))
    res.send('order done')
} 

module.exports={addorder}