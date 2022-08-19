const nodeMailer=require('nodemailer')

const transporter=nodeMailer.createTransport({
    service:'gmail',
    auth:{
        email:"abdulrahmanaligomaa107@gmail.com",
        pass:"PassWord2020#"
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
    });


module.exports={
    sendEmail
}