var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ouerghihana99@gmail.com',
      pass: 'password'
    }
  });
  
  var mailOptions = {
    from: 'ouerghihana99@gmail.com',
    to: 'hanaouerghi30@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, (err, info)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });