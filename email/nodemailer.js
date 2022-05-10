const nodeMailer=require('nodemailer')

const trnsporter=nodeMailer.createTransport({
    service:'gmail',
    auth:{
        email:"abdulrahmanaligomaa107@gmail.com",
        pass:"PassWord2020#"
    }
})




const sendEmail=(email)=>{
    const mailOption ={
    from:"abdoaligomaa107@gmail.com",
    to:email,
    subject:"test Email",
    text:"this is a the first test Email i need to test my emial"
}
transporter.sendMail(mailOption, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });

}
module.exports={
    sendEmail
}