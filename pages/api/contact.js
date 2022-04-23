export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: true,
    auth: {
      user: "paulophdev@gmail.com",
      pass: "maxT78XA0cf25wQj",
    },
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
      res.status(400).json({ err });
    } else {
      res.status(200).json({ msg: "Sucesso!" });
    }
  });
}
