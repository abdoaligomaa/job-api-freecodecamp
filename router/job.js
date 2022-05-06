const express=require('express')
const Router=express.Router()
const auth=require('../middleware/auth')

const {getAllJobs,getJob,creatJob,updateJob,deleteJob}=require('../controller/job')

Router.get("/getAlljobs",auth,getAllJobs)
Router.get("/job/:id",getJob)
Router.post("/creatJob/",creatJob)
Router.patch("/job/:id",updateJob)
Router.delete("/job/:id",deleteJob)

module.exports=Router