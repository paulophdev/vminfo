require("dotenv").config();

export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "paulophdev@gmail.com",
    to: "paulophdev@gmail.com",
    subject: `Mensagem De ${req.body.name}`,
    text: req.body.msg + " | Enviado de: " + req.body.email,
    html: `<div>
      Nome: ${req.body.name}<br />
      E-mail: ${req.body.email}<br />
      Phone: ${req.body.phone}<br />
      Assunto: ${req.body.subject}<br />
      Mensagem: ${req.body.msg}
    </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(400).json({ name: "Falha." });
    } else {
      res.status(200).json({ name: "Sucesso!" });
    }
  });
}