const jwt=require('jsonwebtoken')
function isAuth(req,res,next){
    
    let token=req.headers.authorization

    if(!token){
           return next('Error in Auth')
    }
    token=token.split(' ')[1]
    try {
        const decoded=jwt.verify(token,'jwt secret')
        console.log(decoded)
        req.user={userId:decoded.id,name:decoded.name}
        next()
    } catch (error) {
        next(error)
    }
}

module.exports=isAuth