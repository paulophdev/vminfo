export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "paulophdev@gmail.com",
      pass: "paulo3660",
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
