const { find } = require("../model/authSchema")
const cartShema = require("../model/cartShema")


// ==========================Add product TO Cart ==================== //
const addProductCart =async (req, res)=>{
    const{userId, productItems} = req.body

    if(!userId || !productItems) return res.status(404).send('Please provide all the details')

    const cartExist = await cartShema.findOne({userId})

    if(cartExist){
        productItems.forEach(item => {
        const existCartProduct = cartExist.productItems.find((finditem) =>finditem.productId == item.productId)

        if(existCartProduct){
            existCartProduct.qty += 1
        }else{
            cartExist.productItems.push(item)
        }
    })
        await cartExist.save()
       return res.status(200).send('Product added to cart successfully')

    }
    await new cartShema({
        userId,
        productItems
    }).save()

    res.status(200).send("Added to cart")
}
// ========================== Delete Product From cart ======================= //
const deleteProduct = async(req, res)=>{

    const {userId, productId} = req.body

    if(!userId || !productId) return res.status(404).send('Please provide all the details')
    
    await cartShema.updateOne({userId}, {$pull:{productItems:{productId}}})

    res.status(200).send('Delete done')
}
// ================================get cart products ============================ //
const getCartProducts= async(req, res)=>{
    const {userId} = req.params
    
    const existCartProduct = await cartShema.findOne({userId}).populate('productItems.productId' , 'productTitle thumnailImage discountPrice')

    if(!existCartProduct) return res.status(404).send('No cart added yet')

    const productSum = existCartProduct.productItems.reduce((sum, no)=>  sum + Number(no.productId.discountPrice)* no.qty, 0)    // JSON Formate teke Number a Convert korar jonney Number() use kora hoyece

    res.send({ProductInfo : existCartProduct , TotalProductPrice : productSum})
}
// ================================Update Product Qty ============================ //
// const updateproductQTY= async (req, res)=>{
//     const{userId , productId, qty} = req.body

//     // if(!userId || !productId || !qty) return res.status(404).send('Please provide all the details')
    
//     const existCartProduct = await cartShema.findOne({userId})
        
//     const cartproduct = existCartProduct.productItems.find((item)=>{
//        return item.productId._id.toString() == productId
//     }
//     )
//     cartproduct.qty = qty

//     await existCartProduct.save()
//     res.send('Product QTY updated');
// }
const updateproductQTY = async (req, res) => {
  try {
    const { userId, productId, qty } = req.body;

    if (!userId || !productId || !qty)
      return res.status(400).send("Please provide all the details");

    const result = await cartShema.updateOne(
      { userId, "productItems.productId": productId },
      { $set: { "productItems.$.qty": qty } }
    );

    if (result.modifiedCount === 0)
      return res.status(404).send("Product not found in cart");

    res.status(200).send("Product QTY updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = {addProductCart, deleteProduct, getCartProducts,updateproductQTY}