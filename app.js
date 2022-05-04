const connect=require('./db/connect')
const User=require('./models/user')
const jobRouter=require('./router/job')
const authRouter=require('./router/auth')
const errorHandeler=require('./middleware/errorHandeler')
const notfoundPage=require('./middleware/notfound')

const express=require('express')
const app=express()

const port=process.env.MONGOURL||3000
const DbUrl='mongodb://127.0.0.1:27017/job_api'

app.use(express.json())
// app.use('api/v1/auth',userRouter)
// app.use('api/v1/job',jobRouter)

app.get('/',(req,res)=>{
    throw Error("page not found")
    // res.send('Job Api')
})

app.use(notfoundPage)
app.use(errorHandeler)


const start=async()=>{
    try {
        await connect(DbUrl)
        app.listen(port,()=>console.log('server is listen on port '+port))
    } catch (error) {
        console.log(error)
    }
}
start()