const mongoose  = require("mongoose");

const cartShema = mongoose.Schema({
    userId:{
        type : String,
        required : true
    },
    productItems: [{
        productId:{
            type: mongoose.Schema.ObjectId,
            ref: 'product',
            required: true
        },
        qty :{
            type: Number,
            required : true,
            default : 1,
            min: 1
        }
    }]
}, {timestamps : true})

module.exports = mongoose.model('cart', cartShema)