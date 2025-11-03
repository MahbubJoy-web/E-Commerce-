const CheckUserRole= (accesModuler)=>{

    return (req, res, next)=>{
        if(accesModuler.includes(req.user.userRole)){
            
            next()
        }
        else{res.status (401).send('User Unathorized')}
        
    }
}

module.exports = CheckUserRole