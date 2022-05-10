const nodeMailer=require('nodemailer')

const trnsporter=nodeMailer.createTransport({
    service:'gmail',
    auth:{
        email:"",
        pass:""
    }
})




const sendEmail=(email)=>{
    const mailOption ={
    from:"abdoaligomaa107@gmail.com",
    to:email,
    subject:"test Email",
    text:"this is a the first test Email i need to test my emial"
}
    
}