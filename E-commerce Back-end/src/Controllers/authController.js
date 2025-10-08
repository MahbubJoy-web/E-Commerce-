const { generateOTPNumber, getTimeAfter3Minutes } = require("../helpers/allGenarator")
const { emailRegex, passwordRegex } = require("../helpers/allRegex");
const { sendOTPEmail } = require("../helpers/otpSender");
const authSchema = require("../model/authSchema")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const nodemailer = require("nodemailer");
const { otpVerificationTemplate } = require("../helpers/otpTemplate");
const express = require("express");
const cloudinary = require ('cloudinary').v2 
const fs = require('fs');


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "mahbubhasan1322@gmail.com",
    pass: "ckdt rrda vqqb rsqi",
  },
});


// =============Registration Controller =============== //
const registration = async (req,res)=>{
  try{ 
    const {userName, email, address, phone, password, userRole} = req.body

    // input validation
    if(!userName || !email || !address || !phone || !password || !userRole) {
      return res.status(401).send('Fill all input fields including userRole');
    }

    if(!emailRegex.test(email)) {
      return res.status(401).send('Invalid Email');
    }

    if(!passwordRegex.test(password)) {
      return res.status(401).send(
        'Password must be at least 8 characters and include at least one uppercase letter and one number'
      );
    }

    const existUser = await authSchema.findOne({email});
    if(existUser) {
      return res.status(406).send('User already exists');
    }

    let avater = "https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360";

    const hashPassword = await bcrypt.hash(password, saltRounds);
    const otp = generateOTPNumber();

    const saveModel = new authSchema({
      userName : userName.trim(),
      email,
      address,
      password : hashPassword,
      phone,
      avater,
      otp,
      expireOtpTime : getTimeAfter3Minutes(),
      userRole
    });

    // 🔥 await instead of .then()
    await saveModel.save();

    const UserInfo = {
      userId : saveModel.id,
      userName : saveModel.userName,
      email : saveModel.email,
      avater : saveModel.avater,
      phone : saveModel.phone,
      address : saveModel.address
    };

    res.status(201).send({ UserInfo });

    // send OTP after response
    sendOTPEmail(email, otpVerificationTemplate(userName, otp));

  } catch(err){
    console.error("Registration Error: ", err);
    res.status(500).json({ error: err.message });
  }
}



// ===============OTP Verification Controller================ //

const OtpVerification = async (req, res) =>{
  const { otp } = req.body

  if(!otp) return res.status(401).send('OTP is required')
  if(otp.toString().length !== 6) return res.status(401).send('OTP must be 6 digits')
  if(isNaN(otp)) return res.status(401).send('OTP must be a number')
  
  const dbOtp = await authSchema.findOne({otp})

  if(!dbOtp) return res.status(401).send('Invaild OTP')
  
  if(dbOtp.expireOtpTime < Date.now()) return res.status(401).send('OTP Expired')
    dbOtp.isVerified = true
  dbOtp.otp = null
  dbOtp.expireOtpTime = null

  res.send('OTP Verified')

  dbOtp.save()

}

// ===========Resend OTP Controller =========== //
const resnedOtp = async (req, res) =>{
    const {email} = req.body

    if(!email) return res.status(401).send('Email is required')

    const existUser = await authSchema.findOne({email})
    
    if(!existUser) return res.status(401).send('User not found')
    
    const otp = generateOTPNumber()

    existUser.otp = otp
    existUser.expireOtpTime = getTimeAfter3Minutes()
    existUser.isVerified = false
    existUser.save()
    .then(()=>{
      sendOTPEmail(email, otpVerificationTemplate(existUser.lastName, otp))
    })

    res.send('OTP Resend')

}

// ==================Login Controller =============== //
const Login = async (req, res)=>{
  const { email , password} = req.body

  if(!email || !password) return res.status(401).send('Email and Password are required')

  const dbUser = await authSchema.findOne({email})

  if(!dbUser) return res.status(401).send('User Not Found')
  
  if(dbUser.isVerified == false) return res.status(401).send('Please Verify the your Email')
  
  const bcryptpass = await bcrypt.compare(password , dbUser.password)

  if(!bcryptpass) return res.status(401).send('Wrong Password') 

  const JwtToken = jwt.sign({ email: dbUser.email, userRole:dbUser.userRole }, process.env.jwtToken_code, { expiresIn: '2h' });
  
  const UserInfo = {
    'userId' : dbUser.id,
    'firstName' : dbUser.firstName,
    'lastName' : dbUser.lastName,
    'email' : dbUser.email,
    'avater' : dbUser.avater,
    'phone' : dbUser.phone,
    'gender' : dbUser.gender
  }

      res.status(201).send({UserInfo : UserInfo , accessToken : JwtToken})
}


module.exports = {registration , OtpVerification , resnedOtp , Login} 