const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "mahbubhasan1322@gmail.com",
    pass: "ckdt rrda vqqb rsqi",
  },
});

const mailSender = async ( email, template) => {
  const info = await transporter.sendMail({
    from: 'Chatting App',
    to: email,
    subject: "OTP Verification Code",
    text: "Hello world?",
    html: template,
  });
};

module.exports = { mailSender };