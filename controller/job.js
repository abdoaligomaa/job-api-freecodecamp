const mongoose = require('mongoose')
const job = require('../models/job')
const Job = require('../models/job')
const customError = require('../error/customError')
require('express-async-errors')

const getAllJobs = async (req, res, next) => {
    const userId = req.user.userId

    const jobs = await Job.find({ createdBy: userId })
    if (!jobs) {
        throw new customError('there are No job for you ', 404)
    }
    res.json({ count: jobs.length, jobs })
}
const getJob = async (req, res, next) => {
    // var jobId = mongoose.Types.ObjectId(req.params.id)
    const jobId = req.params.id
    try {
        const job = await Job.findOne({
            _id: jobId,
            createdBy: req.user.userId,
        })
        if (!job) {
            throw new customError('There are no job by this id', 404)
        }
        res.json(job)
    } catch (error) {
        throw new customError(
            'there are error in job id like id is not correct',
            404
        )
    }
}
const creatJob = async (req, res, next) => {
    // validate req.body
    // create this job
    // put created id from req.user.userId
    const createdBy = req.user.userId
    req.body.createdBy = createdBy
    const { company, position, status } = req.body
    if (!company || !position) {
        throw new customError(
            'you should Enter the company name ,and the position',
            404
        )
    }
    if (status) {
        const AvilableStatus = ['interview', 'declined', 'pending']
        const CorrectStatus = AvilableStatus.includes(status)
        if (!CorrectStatus) {
            throw new customError(
                'status for this position is not true you should choice from interview, declined,pending',
                404
            )
        }
    }

    const job = await Job.create(req.body)
    res.json(job)
}

const updateJob = async (req, res, next) => {
    const jobId = req.params.id
    // var jobId = mongoose.Types.ObjectId(req.params.id)
    let {
        body: { company, position, status },
    } = req
    if (company == ' ' || position == ' ') {
        throw new customError('you should Enter The update field', 404)
    }
    if (status) {
        const AvilableStatus = ['interview', 'declined', 'pending']
        const CorrectStatus = AvilableStatus.includes(status)
        if (!CorrectStatus) {
            throw new customError(
                'status for this position is not true you should choice from interview, declined,pending',
                404
            )
        }
        // i should get a better solution for this code
    }else if(!status){
        status = 'pending'
    }
    

    try {
        const job = await Job.findByIdAndUpdate(jobId, req.body, {
            new: true,
            runValidators: true,
        })
        if (!job) {
            throw new customError('there are no job in this id', 404)
        }
        res.json(job)
    } catch (error) {
        throw new customError('Error in updating the job', 404)
    }
}
const deleteJob = async (req, res, ) => {
    const jobId = req.params.id
    try {
        const job=await Job.findByIdAndDelete(jobId)
    } catch (error) {
        throw new customError('Error in deleting ,the id is not correct',404)
    }
    res.json(job)
}

module.exports = {
    getAllJobs,
    getJob,
    creatJob,
    deleteJob,
    updateJob,
}
