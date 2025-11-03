const  mongoose  = require("mongoose");

const authSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    avater : {
        type : String,
        default : null
    },
    address : {
        type : String,
        required : true
    },
    otp : {
        type : Number,
        default : null
    },
    expireOtpTime : {
        type : Date,
        default : null
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    userRole : {
        type : String,
        default : 'user',
        enum : ['user','admin','staff']
    }
} , { timestamps : true }) 

module.exports = mongoose.model('allUser' , authSchema)