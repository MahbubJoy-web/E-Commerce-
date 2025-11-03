const { data } = require('react-router-dom');
const fs = require('fs');
const authSchema = require('../model/authSchema');
const catagorySchema = require('../model/catagorySchema');
const productSchema = require('../model/productSchema');
const { generateSlug, generateOTPNumber } = require('../helpers/allGenarator');
const { log } = require('console');

const cloudinary = require ('cloudinary').v2 


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dlycbhpqw', 
        api_key: '446375346324896', 
        api_secret: 'n0YpcXgiAtby59lrAQT8lwcs7Os' // Click 'View API Keys' above to copy your API secret
    });
// ===================================== Add to Catagory =================================== //
const add_catagory =async (req, res)=>{
    const {catagoryName } = req.body

    const ExistCatagory = await catagorySchema.findOne({catagoryName})

    if(ExistCatagory) return res.status(401).send(' Catagory Already Exist')

    // Upload an image
     const catagoryImage = await cloudinary.uploader
       .upload(
           req.file.path, {
               public_id: Date.now(),
           }
       )
       .catch((error) => {
           console.log(error);
       });

       fs.unlink(req.file.path, (err)=>{
        if(err) console.log(err);
       })  

    // ======creator details ======== //
    const creatorUser = await authSchema.find({email: req.user.email})


    // ======== save data to DB ======= //
    await new catagorySchema({
        catagoryName,
        catagoryImage: catagoryImage.url,
        creatorEmail: creatorUser[0].email,
        creatorName : creatorUser[0].userName 
    }).save()
       
    res.send('Catagory Added')
    
}
// ======================================UploadProduct ==================================== //
const upload_product = async(req , res)=>{
    const { productTitle, productTag, productDiscription, productPrice, discountPercent,  productCatagory, stock, varient } = req.body
    // ==============discount price calculation ============ //
    const discountPrice =(productPrice - (productPrice* (discountPercent / 100)))
    //  ============ slug ===========
    const slug = generateSlug(productTitle)
    // ============uploading Image to Cloudinary ========== //
    const thumnailImage = await cloudinary.uploader.upload(
        req.files.thumnailImage[0].path, {
            public_id : generateOTPNumber(),
            folder : "thumbnailImage"
        })
        fs.unlink(req.files.thumnailImage[0].path, (err)=>{
            if(err){res.send(err)}});
        
    const subImage = await Promise.all(
        req.files.subImage.map(async(item)=>{
        
        const CloudinaryItems = await cloudinary.uploader.upload(
        item.path, {
            public_id : generateOTPNumber(),
            folder : "SubImage"
        })
        fs.unlink(item.path, (err)=>{
            if(err){res.send(err)} 
        })
        return CloudinaryItems.url
    })
    )
    
    
    // =====save Data to databade ====
    await new productSchema({
        productTitle, 
        productTag, 
        productDiscription,
        productPrice,  
        discountPercent,
        productCatagory,
        discountPrice,
        stock,
        varient : JSON.parse(varient),
        thumnailImage : thumnailImage.url,
        subImage,
        slug
    }).save()
    
    res.send('Product Added')
}
// ====================================== Update Product ================================= //
const updateProduct = async (req, res) => {
  try {
    const {
      productTitle,
      productTag,
      productDiscription,
      productPrice,
      discountPercent,
      productCatagory,
      stock,
      varient,
      slug,
    } = req.body;

    const ExistProduct = await productSchema.findOne({ slug });

    if (!ExistProduct) return res.status(404).send("Product Not Found");

    // =================== THUMBNAIL IMAGE ===================
    if (req.files?.thumnailImage) {
      // 1️⃣ Delete old image from Cloudinary
      if (ExistProduct.thumnailImage) {
        const oldThumbnailPublicId = ExistProduct.thumnailImage
          .split("/")
          .slice(7)
          .join("/")
          .split(".")[0];
        await cloudinary.uploader.destroy(oldThumbnailPublicId);
      }

      // 2️⃣ Upload new image
      const uploadThumb = await cloudinary.uploader.upload(
        req.files.thumnailImage[0].path,
        {
          public_id: generateOTPNumber(),
          folder: "thumbnailImage",
        }
      );

      // 3️⃣ Delete local file
      fs.unlink(req.files.thumnailImage[0].path, (err) => {
        if (err) console.log("File unlink error:", err);
      });

      // 4️⃣ Save new image URL
      ExistProduct.thumnailImage = uploadThumb.url;
    }

    // =================== SUB IMAGES ===================
    if (req.files?.subImage) {
      // ==== Delete old sub images from Cloudinary
      if (ExistProduct.subImage && ExistProduct.subImage.length > 0) {
        await Promise.all(
          ExistProduct.subImage.map(async (img) => {
            const publicId = img.split("/").slice(7).join("/").split(".")[0];
            await cloudinary.uploader.destroy(publicId);
          })
        );
      }

      // 2️⃣ Upload new sub images
      const subImage = await Promise.all(
        req.files.subImage.map(async (item) => {
          const CloudinaryItems = await cloudinary.uploader.upload(item.path, {
            public_id: generateOTPNumber(),
            folder: "SubImage",
          });
          fs.unlink(item.path, (err) => {
            if (err) console.log("File unlink error:", err);
          });
          return CloudinaryItems.url;
        })
      );

      // 3️⃣ Save new subImage URLs
      ExistProduct.subImage = subImage;
    }

    // =================== Updated DATA ===================
    if (productTitle) {
      ExistProduct.productTitle = productTitle;
      ExistProduct.slug = generateSlug(productTitle);
    }

    if (productTag) ExistProduct.productTag = productTag;
    if (productDiscription) ExistProduct.productDiscription = productDiscription;
    if (productPrice) ExistProduct.productPrice = productPrice;
    if (discountPercent) {
      ExistProduct.discountPercent = discountPercent;
      ExistProduct.discountPrice =
        productPrice - productPrice * (discountPercent / 100);
    }
    if (productCatagory) ExistProduct.productCatagory = productCatagory;
    if (stock) ExistProduct.stock = stock;
    if (varient) ExistProduct.varient = JSON.parse(varient);

    // =================== SAVE PRODUCT ===================
    await ExistProduct.save();

    res.status(200).send("Product Updated Successfully ✅");
  }
    catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).send("Internal Server Error");
  }
}
// ====================================== Admin Approval ================================ //
const adminApproval =async (req, res)=>{
    const {slug, status} = req.body

    if(status !== "approved" && status !== "rejected") return res.status(401).send("invaild Status")
    
    const updateProduct =await productSchema.findOne({slug})

    if(!updateProduct) return res.status(404).send("Product Not Found")

        updateProduct.status = status
     updateProduct.save()
     
     res.status(200).send("Status Updated")
}
// ====================================== Customer Review =============================== //
const CustomerReview = async(req, res)=>{
    const {slug , reviewerName, reviewerRating, reviewerComment, }= req.body

    const ExistProduct = await productSchema.findOne({slug})

    if(!ExistProduct) return res.status(404).send("Product Not Found")

    ExistProduct.review.push({
        reviewerName,
        reviewerRating,
        reviewerComment,
        reviewerDate: new Date()
    })   
    await ExistProduct.save()
    
    res.send("Review Added")
}

// ====================================get singele product================================ //
const singeleProduct = async(req, res)=>{
    const {slug}= req.params

    const ExistProduct = await productSchema.findOne({slug})

    if(!ExistProduct) return res.status(404).send("Product Not Found")

    res.status(200).send(ExistProduct)
}
// ====================================get All product================================ //
const allProduct =async (req, res)=>{
  const{ limit , searchItem} = req.query

  const limitNo = limit || 9

  const searchProduct = {}

  searchItem && (searchProduct.productTitle ={$regex:new RegExp(searchItem, "i")})

  const ExistAllproduct = await productSchema.find(searchProduct).limit(limitNo)

   res.send(ExistAllproduct)
}
// ==================================== Delete Product ================================ //
const deleteProduct =async(req, res)=>{
  const {slug} = req.body

  const ExistAllproduct = await productSchema.findOneAndDelete({slug})
  if(!ExistAllproduct) return res.status(404).send("Product Not Found")

      // =================== THUMBNAIL IMAGE ===================
    if (ExistAllproduct.thumnailImage){
      // 1️⃣ Delete old image from Cloudinary
      if (ExistAllproduct.thumnailImage) {
        const oldThumbnailPublicId = ExistAllproduct.thumnailImage
          .split("/")
          .slice(7)
          .join("/")
          .split(".")[0];
        await cloudinary.uploader.destroy(oldThumbnailPublicId);
      }

    }

    // =================== SUB IMAGES ===================
    if (ExistAllproduct.subImage) {
      // ==== Delete old sub images from Cloudinary
      if (ExistAllproduct.subImage && ExistAllproduct.subImage.length > 0) {
        await Promise.all(
          ExistAllproduct.subImage.map(async (img) => {
            const publicId = img.split("/").slice(7).join("/").split(".")[0];
            await cloudinary.uploader.destroy(publicId);
          })
        );
      }
    
  res.send("Product Deleted")
}
}
module.exports ={ add_catagory, upload_product, updateProduct,adminApproval, CustomerReview, singeleProduct, allProduct, deleteProduct}