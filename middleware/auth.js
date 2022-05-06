const jwt=require('jsonwebtoken')
function isAuth(req,res,next){
    
    let token=req.headers.authorization

    if(!token){
           return next('Error in Auth')
    }
    token=token.split(' ')[1]
    console.log(token)
    // const decoded=jwt.verify(token,'jwt secret')
    const decoded=jwt.verify('abdcededed','jwt secret')
    req.user=decoded
    console.log(decoded)
    next()
}

module.exports=isAuth