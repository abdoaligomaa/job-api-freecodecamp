const mongoose = require('mongoose')
const job = require('../models/job')
const Job = require('../models/job')
const customError = require('../error/customError')
require('express-async-errors')

const getAllJobs = async (req, res, next) => {
    const userId = req.user.userId
    
    const jobs = await Job.find({ createdBy: userId })
    if (!jobs) {
        throw new customError('there are No job for you ',404)
    }
    res.json({ count: jobs.length, jobs })
}
const getJob = async (req, res, next) => {
    // var jobId = mongoose.Types.ObjectId(req.params.id)
    const jobId = req.params.id
    try {
        const job = await Job.findById(jobId)
        if (!job) {
        throw new customError('There are no job by this id', 404)

        }
        res.json(job)
    } catch (error) {
        throw new customError('there are error in job id like it is not completed',404)
    }
}
const creatJob = async (req, res, next) => {
    // validate req.body 
    // create this job
    // put created id from req.user.userId
    const createdBy=req.user.userId
    req.body.createdBy=createdBy
    const {company,position,status}=req.body
    if(!company||!position){
        throw new customError(
            'you should Enter the company name ,and the position',
            404
        )
    }
    if(status){
        const AvilableStatus=['interview', 'declined', 'pending']
        const CorrectStatus=AvilableStatus.includes(status)
        if(!CorrectStatus){
         throw new customError(
             'status for this position is not true you should choice from interview, declined,pending',
             404
         )   
        }
    }
    
        const job= await Job.create(req.body)
        res.json(job)
    }
    
const updateJob = async (req, res, next) => {
    const jobId = req.params.id
    // var jobId = mongoose.Types.ObjectId(req.params.id)
    const {
        body: { company, position },
    } = req
    if (company == ' ' && position == ' ') {
        return next('you should enter The update field')
    }
    try {
        const job = await Job.findByIdAndUpdate(jobId, req.body, {
            new: true,
            runValidators: true,
        })
        if (!job) {
            return next('there are no job in this id')
        }
        res.send(job)
    } catch (error) {
        res.json({ error })
    }
}
const deleteJob = async (req, res, next) => {
    const jobId = req.params.id
    // var jobId = mongoose.Types.ObjectId(req.params.id)
    const {
        body: { company, position },
    } = req
    if (company == ' ' && position == ' ') {
        return next('you should enter The update field')
    }
    try {
        const job = await Job.findByIdAndRemove(jobId)
        if (!job) {
            return next('there are no job in this id')
        }
        res.send(job)
    } catch (error) {
        res.json({ error })
    }
}

module.exports = {
    getAllJobs,
    getJob,
    creatJob,
    deleteJob,
    updateJob,
}
