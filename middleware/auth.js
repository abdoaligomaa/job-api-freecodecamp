const jwt=require('jsonwebtoken')
function isAuth(req,res,next){
    
    let token=req.headers.authorization
    if(!token){
           throw new Error('Error in Auth')
    }
    token=token.split(' ')[1]
    try {
        const decoded=jwt.verify(token,'jwt secret')
        req.user={userId:decoded.id,name:decoded.name}
        next()
    } catch (error) {
        throw new Error('Error in Token Validation')
    }
}

module.exports=isAuth