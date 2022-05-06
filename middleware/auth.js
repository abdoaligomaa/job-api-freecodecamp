function isAuth(req,res,next){
    const token=req.headers.authorization
    const decoded=jwt.verify(token,'jwt secret')
    req.user=decoded
    console.log(decoded)
    next()
}

module.exports=isAuth