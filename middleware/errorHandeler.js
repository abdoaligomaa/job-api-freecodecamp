const CustomError=require('../error/customError')
const errorHandeler=(error,req,res,next)=>{
  if (error instanceof CustomError){
    return res.status(error.statausCode).json({message:error.message})
  }

  res.status(500).json({error:error,message:"internal server Error like error in database"})

}
module.exports=errorHandeler