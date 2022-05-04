const errorHandeler=(error,req,res,next)=>{
    
    res.send({error})
}
module.exports=errorHandeler