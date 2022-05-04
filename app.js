const connect=require('./db/connect')
// const User=require('./model/user')
// const userRouter=require('./router/user')
// const prductRouter=require('./router/products')

const express=require('express')
const app=express()

const port=process.env.MONGOURL||3000
const DbUrl='mongodb://127.0.0.1:27017/job_api'

app.use(express.json())
// app.use(userRouter)
// app.use(prductRouter)





const start=async()=>{
    try {
        await connect(DbUrl)
        app.listen(port,()=>console.log('server is listen on port '+port))
    } catch (error) {
        console.log(error)
    }
}
start()