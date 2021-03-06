import nodemailer from 'nodemailer'

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: import.meta.env.VITE_EMAIL,
    pass: import.meta.env.VITE_EMAIL_PASS,
  },
})

export const post = async (req) => {
  const mailData = {
    from: import.meta.env.VITE_EMAIL, // sender address
    to: import.meta.env.VITE_EMAIL, // list of receivers
    subject: 'New contact',
    text:
      'name: ' +
      req.body.name +
      '\nemail: ' +
      req.body.email +
      '\n\nmessage: ' +
      req.body.message,
  }

  const messageSent = await transporter.sendMail(mailData)

  if (messageSent.accepted[0] !== null) {
    return { body: { message: 'success' } }
  } else {
    return { body: { message: 'error' } }
  }
}