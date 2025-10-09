const { data } = require('react-router-dom');
const fs = require('fs');
const authSchema = require('../model/authSchema');
const catagorySchema = require('../model/catagorySchema');
const productSchema = require('../model/productSchema');
const { generatePublicId, generateSlug, generateOTPNumber } = require('../helpers/allGenarator');

const cloudinary = require ('cloudinary').v2 


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dlycbhpqw', 
        api_key: '446375346324896', 
        api_secret: 'n0YpcXgiAtby59lrAQT8lwcs7Os' // Click 'View API Keys' above to copy your API secret
    });
// ====================== Add to Catagory ==================== //
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
       
    res.send('done')
    
}

// ======================UploadProduct ====================== //

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
// ====================================== Update Product ============================ //

const updateProduct =async (req, res)=>{
    const { productTitle, productTag, productDiscription, productPrice, discountPercent,  productCatagory, stock, varient, slug } = req.body
    
    
    const ExistProduct = await productSchema.findOne({slug})
    
    if(!ExistProduct) return res.status(404).send('Product Not Found')
        
    if(productTitle) ExistProduct.productTitle = productTitle
    
    if(productTitle) ExistProduct.slug = generateSlug(productTitle)    

    if(productTag) ExistProduct.productTag = productTag    

    if(productDiscription) ExistProduct.productDiscription = productDiscription    

    if(productPrice) ExistProduct.productPrice = productPrice    

    if(discountPercent) ExistProduct.discountPercent = discountPercent    

    if(discountPercent) ExistProduct.discountPrice = (productPrice - (productPrice* (discountPercent / 100)))  
    
    if(productCatagory) ExistProduct.productCatagory = productCatagory    
    
    if(stock) ExistProduct.stock = stock    

    if(varient) ExistProduct.varient = JSON.parse(varient)    

    
    await ExistProduct.save()

    // await cloudinary.uploader.destroy(ExistProduct.thumnailImage.split('/').slice(7).join("/").split('.')[0])

    // ExistProduct.subImage.map(async(item)=>{
    //     await cloudinary.uploader.destroy(item.split('/').slice(7).join("/").split('.')[0])
        
    // })
    res.send('done')
}


module.exports ={ add_catagory, upload_product, updateProduct}