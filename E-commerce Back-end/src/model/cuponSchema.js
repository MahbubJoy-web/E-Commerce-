const mongoose = require('mongoose')

const cuponSchema = new mongoose.Schema({
    cuponCode :{
        type: String,
        default : null
    },
    discountPrice :{
        type : Number,
        default :null
    }
}, {timestamps : true})

module.exports = mongoose.model('cupon', cuponSchema)