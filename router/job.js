const express=require('express')
const Router=express.Router()

const {getAllJobs,getJob,creatJob,updateJob,deleteJob}=require('../controller/job')

Router.get("/getAlljobs",getAllJobs)
Router.get("/:id",getJob)
Router.post("/creatJob",creatJob)
Router.patch("/:id",updateJob)
Router.delete("/:id",deleteJob)

module.exports=Router