const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fahimabrar1800424101@gmail.com',
    pass: 'Test180042101', // naturally, replace both with your real credentials or an application-specific password
  },
});

const sendMails = (mailOptions) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
module.exports = sendMails;