import nodemailer from 'nodemailer';


class EmailController {
    public Email = async (formulario: {asunto: any; nombre: any; apellido: any;telefono: any; email: any; message: any; }) =>{
      var transport = nodemailer.createTransport({
        host: "smtp.gmail.com", 
        port: 465,
        auth: {
          user: "haizaratech@gmail.com",
          pass: "felipe123."
        }
      });
      const mailOptions = {
        from: `”${formulario.nombre} ” <${formulario.email}>`,
        to: "info@rivera-designs.com", // Cambia esta parte por el destinatario
        subject: formulario.asunto,
        html: `
        <strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>Apellido:</strong> ${formulario.apellido} <br/>
        <strong>Telefono:</strong> ${formulario.telefono} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.message}
        `
        };
      await transport.sendMail(mailOptions, function (err, info) {
          if (err)
          console.log(err)
          else
          console.log(formulario.nombre);
          console.log(info);
          });
    }
  }

const emailController= new EmailController();
export default emailController;

