const CheckUserRole= (accesModuler)=>{

    return (req, res, next)=>{
        if(accesModuler.includes(req.user.userRole)){
            console.log(req.user.userRole);
            
            next()
        }
        else{res.status (401).send('user Unathorized')}
        
    }
}

module.exports = CheckUserRole