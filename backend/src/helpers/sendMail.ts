import nodemailer from 'nodemailer'

const {MAIL_EMAIL, MAIL_PASS} = process.env

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: MAIL_EMAIL,
    pass: MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

interface IData {
    to: string,
    subject: string,
    html:string
}

const sendEmail = async (data:IData) => {
  const email = { ...data, from: "cheekygeroin@ukr.net" };
  await transport.sendMail(email);
  return true;
};

export default sendEmail