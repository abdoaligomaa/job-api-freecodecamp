const mongoose = require('mongoose')
const job = require('../models/job')
const Job = require('../models/job')
const customError = require('../error/customError')
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
            return next('there are no job in this id')
        }
        res.send(job)
    } catch (error) {
        res.json({ error })
    }
}
const creatJob = async (req, res, next) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.send(job)
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
