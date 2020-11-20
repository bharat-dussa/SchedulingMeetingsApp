require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
const cors=require('cors');
const port =process.env.PORT || 3001;


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send("Welcome to Booking Section")
// });

 
app.post('/api/bookings',(req,res)=>{
    let data=req.body;

    var smtpTransport=nodemailer.createTransport({
        service:'gmail',
        port:465,
        auth:{
            user:'freelancers.flow@gmail.com',
            pass:'{Freelancers@123}'
        }
    });
    console.log('Parents name ',data.parentname)
    console.log('child name ',data.childname)
    console.log('course name ',data.coursename)
    console.log('date name ',data.date)
    console.log('childage name ',data.childage)
    console.log('email name ',data.parentemail)
    console.log('coursenem name ',data.coursenaem)

    let mailOptions={
        from:'freelancers.flow@gmail.com',
        to:'bharatdussa@gmail.com',
        subject:'NotchUp Trial Class Booked Successfully',
        text:`
        Dear ${data.parentname},

        ${data.childname}'s ${data.coursename} class at ${data.date} has been successfully booked.
        
        `
    };

    smtpTransport.sendMail(mailOptions,(error,data)=>{
        if(error){
            console.log('Error occurs',error)
        }else{
            console.log('Email sent!')
        }
    })

    smtpTransport.close();
})


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})