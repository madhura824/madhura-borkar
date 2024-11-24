"use server"
import nodemailer from 'nodemailer';
import { ContactFormDataType, ContactFormState } from './definitions';
const dotenv = require('dotenv').config();
export const submitContactForm = async (
  prevState: ContactFormState,
  data: FormData
): Promise<{ error: boolean; message: string }> => {

    console.log("Here")
    console.log(process.env.EMAIL_ID);
    console.log(process.env.EMAIL_PASSWORD);

  let emailDetails: ContactFormDataType = {
    name: data.get('name') as string,
    email: data.get('email') as string,
    mobileNumber: parseInt(data.get('mobileNumber') as string),
    subject: data.get('subject') as string,
    message: data.get('message') as string
  };

  // Extracting values from FormData
 
  

console.log("email details")
  Object.entries(emailDetails).map((value)=>{
    console.log(value[0], value[1])
  })

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "madhuraborkar.portfolio@gmail.com",
      pass:"mvrfkyfnvemwiwhy"
      //  mvrf kyfn vemw iwhy
    }
  });
  
  
  
//   var transporter = nodemailer.createTransport({   
//     service:"gmail",
//     port: 587,
//     secure:false,   
//   host: "smtp.gmail.com",
//   auth: {
//     user: process.env.EMAIL_ID,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

  const mailOptions = {
    from: "madhuraborkar.portfolio@gmail.com",
    to: "madhuraborkar.portfolio@gmail.com",
    subject: emailDetails.subject,
    text: `${emailDetails.message}.\n Name: ${emailDetails.name}.\n Contact number: ${emailDetails.mobileNumber}. \n Email Address: ${emailDetails.email}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return { error: false, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: true, message: 'Failed to send email' };
  }
};
