

const getAllJobs=(req,res,next)=>{
    console.log(req.user)
    res.send(req.user)

}
const getJob=(req,res,next)=>{
    res.send(req.user)
}
const creatJob=(req,res,next)=>{
    res.send('creat')
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