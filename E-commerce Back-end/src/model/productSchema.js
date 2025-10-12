const mongoose  = require("mongoose");

const productSchema = new mongoose.Schema({
    productTitle :{
        type : String,
        required : true
    },
    productTag :{
        type : String,
        required : true
    },
    thumnailImage :{
        type : String,
        required : true
    },
    subImage : { type: [String], default: [] },
    productDiscription :{
        type : String,
        required : true
    },
    productPrice :{
        type : String,
        required : true
    },
    review :[{
        reviewerName : {type : String, default: null},
        reviewerRating :{ type : String, default : null},
        reviewerComment :{ type : String, default : null},
        reviewerDate :{ type : Date, default : null}
    }],
    discountPrice :{
        type : String,
        default : null
    },
    status :{
        type : String,
        default : "pendding",
        enum : ["approved", "pendding", "rejected"]
    },
    discountPercent :{
        type : String,
        default : null
    },
    slug :{
        type : String,
        required : true
    },
    productCatagory :{
        type : mongoose.Schema.ObjectId,
        required : true
    },
    stock :{
        type : String,
        required : true
    },
    varient :[{
        varientName : {type : String, default : null, enum : ['size', ' color']},
        varientvalue : {type : String, default : null},
        additionalPrice : { type : String, default : null }
    }]
})


module.exports = mongoose.model('product', productSchema)
