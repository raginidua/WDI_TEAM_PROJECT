var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
const emailHtml = require('./emailHtml.js');

var options = {
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD
  }
};

var client = nodemailer.createTransport(sgTransport(options));

var email = {
  from: 'awesome@bar.com',
  to: 'jackhkmatthews@gmail.com',
  subject: 'Hello',
  text: 'Hello world',
  html: emailHtml
};

client.sendMail(email, function(err, info){
  if (err ){
    console.log(err);
  } else {
    console.log('Message sent: ' + info.response);
  }
});
