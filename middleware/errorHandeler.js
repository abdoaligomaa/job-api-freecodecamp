const errorHandeler=(error,req,res,next)=>{
    console.log(error)
    res.send({error})
}
module.exports=errorHandeler