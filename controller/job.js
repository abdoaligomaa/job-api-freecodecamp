

const getAllJobs=(req,res,next)=>{
    res.send('get all jobs and some other jobs')
}
const getJob=(req,res,next)=>{
    res.send('get job by id ')
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