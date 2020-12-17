const db= require("../models");
const registration = db.registration;
const Op = db.Sequelize.Op;
// const bodyparse=require('body-parser');
// const app=require('express')();
// const port=8002;
const nodemailer=require('nodemailer');//acquiring nodemailer module 

// app.use(bodyparse.urlencoded({extended:false}));
// app.use(bodyparse.json());
transporter= nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    auth: {
        user: 'ruchamudalgikar1234@gmail.com',
        pass: 'pushkarr'
    }
});
exports.findAll = (req, res) => {
// alert("ala");
// res.send("ala");
// console.log("ala");
    registration.findAll({
        attributes:['email','password','role']
    }).then((users)=>{
        res.send(users);
    })
  };


  exports.Update = (req, res) => {

    registration.update(
        { password:req.body.password},
        { where: {email:req.body.email} }
      ).then(submittedu=>{
        res.send(submittedu);
    }

    )
    
        
    
    

mailOptions={
    from:'ruchamudalgikar1234@gmail.com',
    to:req.body.email,
    subject:'Otp',
    text:JSON.stringify(req.body.otp)
}
,
transporter.sendMail(mailOptions,function(err,data){
    if(err){
        console.log('error has come',err);
    }
    else{
        console.log('succeful');
    }




}
)
  };



// app.get('/login-form',(req,res)=>{

//     registration.findAll({
//         attributes:['email','password']
//     }).then((users)=>{
//         res.send(users);
//     })
// }

// )



// app.put('/login-form-post',(req,res)=>{
//     registration.update(
//         { password:req.body.password},
//         { where: {email:req.body.email} }
//       ).then(submittedu=>{
//         res.send(submittedu);
//     }

//     )
    
        
    
    

// mailOptions={
//     from:'ruchamudalgikar1234@gmail.com',
//     to:req.body.email,
//     subject:'Otp',
//     text:JSON.stringify(req.body.otp)
// }
// ,
// transporter.sendMail(mailOptions,function(err,data){
//     if(err){
//         console.log('error has come',err);
//     }
//     else{
//         console.log('succeful');
//     }




// }
// )

// });






