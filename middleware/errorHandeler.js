const errorHandeler=(error,req,res,next)=>{
    // console.log(error)
    res.json({error:error.message})
}
module.exports=errorHandeler