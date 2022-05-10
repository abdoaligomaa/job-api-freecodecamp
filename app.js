const connect=require('./db/connect')
const User=require('./models/user')
const jobRouter=require('./router/job')
const authRouter=require('./router/auth')
const errorHandeler=require('./middleware/errorHandeler')
const notfoundPage=require('./middleware/notfound')
const auth=require('./middleware/auth')

require('dotenv').config()

const express=require('express')
const app=express()

const port=process.env.MONGOURL||3000
const DbUrl='mongodb://127.0.0.1:27017/job_api'

app.use(express.json())
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/job',auth,jobRouter)


const nodeMailer=require('nodemailer')


app.get('/sendEmail',(req,res)=>{
    const transporter=nodeMailer.createTransport({
        service:'gmail',
        auth:{
            email:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })
    const mailOption ={
        from:"abdulrahmanaligomaa107@gmail.com",
        to:"abdulrahmanaligomaa107@gmail.com",
        subject:"test Email",
        text:"this is a the first test Email i need to test my emial"
    }
    transporter.sendMail(mailOption, function(err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    })
    res.send("email send")
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