// =============== OTP Number Generator ============ //
const generateOTPNumber = () => Math.floor(100000 + Math.random() * 900000);
// ================== Get Time After 3 Minutes ================== //
const getTimeAfter3Minutes = () => new Date(Date.now() + 3 * 60 * 1000);
// ==================== Slug Generator ================ //
const generateSlug = (productTitle)=> {
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);

  const slug = productTitle
    .toLowerCase()                     // lowercase
    .trim()                            // remove spaces from start/end
    .replace(/[^a-z0-9\s-]/g, "")      // remove special characters
    .replace(/\s+/g, "-");             // replace spaces with -

  return `${slug}-${randomNumber}`;
}

// ================== Cloudinary Image Upload Helper =================== //
const generatePublicId = (productTitle)=>{
      return productTitle
    .toLowerCase()              // convert to lowercase
    .trim()                     // remove extra spaces
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-");      // replace spaces with hyphens
}

module.exports = {generateOTPNumber , getTimeAfter3Minutes, generateSlug , generatePublicId}