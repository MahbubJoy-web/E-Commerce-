const cuponSchema = require("../model/cuponSchema")

// ==========================Add Cupon Code ==================== //
const cuponCode = async(req, res)=>{
    try{
        const { cuponCode , discountPrice} = req.body
       
        if(!cuponCode || !discountPrice) return res.status(404).send('Please provide all the details')
       
        await new cuponSchema({
            cuponCode,
            discountPrice
        }).save()
       
        res.send('Cupon code Added')

    }
    catch(err){
        if(err){
            res.status(500).send('Server Error')
            console.log(err);
        }
    }
}
// ========================== Update Cupon Code ===================== //
const updateCupon = async(req, res)=>{
    try{
        const {cuponId, cuponCode, discountPrice} = req. body
    
        if(!cuponId ) return res.status(404).send('Please provide Cupon ID')
    
        const ExistCupon = await cuponSchema.findOne({_id : cuponId})
    
        if(!ExistCupon) return res.status(404).send('No cupon found')
    
        if(cuponCode) ExistCupon.cuponCode = cuponCode
    
        if(discountPrice) ExistCupon.discountPrice = discountPrice
    
        await ExistCupon.save()
    
        res.send('Cupon updated successfully')
    }
    catch(err){
        if(err){
            res.status(500).send('Server Error')
            console.log(err);
        }
    }
}
//=========================== Cupon delete ====================== //
const deleteCupon = async(req, res)=>{
    try{
        const {cuponId} = req.body

        if(!cuponId) return res.status(404).send('Cupon Not Founded')

        await cuponSchema.findByIdAndDelete({_id : cuponId})

        res.send('Cupon Deleted')
    }
    catch(err){
        if(err){
            res.status(500).send('Server Error')
            console.log(err);
        }
    }
}
module.exports = {cuponCode ,updateCupon, deleteCupon}