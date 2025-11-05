const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customerName : {
        type : String,
        required: true
    },
    customerPhone : {
        type : String,
        required: true
    },
    customerEmail : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    district : {
        type : String,
        required: true
    },
    cartId : {
        type : String,
        required: true
    },
    cuponCode : {
        type : String,
        required: true
    },
    comments : {
        type : String,
        required: true
    },
    shippingCost : {
        type : String,
        required: true
    },
    total : {
        type: String,
        required:true
    },
    deliveryStatus : {
        type : String,
        enum : ['Processing', 'Shipping', 'OutForDeliver', 'Delivered', 'Cancel']
    },
    orderId : {
        type : Number,
        required: true
    },
    orderDate : {
        type : Date,
        required: true
    }
})

module.exports = mongoose.model('order', orderSchema)