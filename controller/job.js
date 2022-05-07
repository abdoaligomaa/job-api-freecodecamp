
const Job=require('../models/job')
const getAllJobs=(req,res,next)=>{
    console.log(req.user)
    res.send(req.user)

}
const getJob=async(req,res,next)=>{
    var jobId = mongoose.Types.ObjectId(req.params.id)
    // const jobId=req.params.id 
    const job=await Job.findById(jobId)
    if(!job){
        return next("there are no job in this id")
    }
    res.send(job)
    
}
const creatJob=async(req,res,next)=>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.send(job)
}
const updateJob=(req,res,next)=>{
    res.send('update job ')
}
const deleteJob=(req,res,next)=>{
    res.send('delete job')
}

module.exports={
    getAllJobs,
    getJob,
    creatJob,
    deleteJob,
    updateJob
}