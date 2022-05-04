const connect=require('./db/connect')
const User=require('./model/auth')
const jobRouter=require('./router/job')
const errorHandeler=require('./middleware/errorHandeler')
const notfoundPage=require('./middleware/notfound')

const express=require('express')
const app=express()

const port=process.env.MONGOURL||3000
const DbUrl='mongodb://127.0.0.1:27017/job_api'

app.use(express.json())
app.use('api/v1/auth',userRouter)
app.use('api/v1/job',jobRouter)
app.use(notfoundPage)
app.use(errorHandeler)

app.get('/',(req,res)=>{
    res.send('Job Api')
})



const start=async()=>{
    try {
        await connect(DbUrl)
        app.listen(port,()=>console.log('server is listen on port '+port))
    } catch (error) {
        console.log(error)
    }
}
start()