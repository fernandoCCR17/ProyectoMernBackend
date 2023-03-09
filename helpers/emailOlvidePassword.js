import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const {email, nombre, token} = datos
    // Enviar el email
    const info = await transporter.sendMail({
      from: '"APV - Administrador Pacientes Veterinaria" <apv@correo.com>',
      to: email,
      subject: 'Reestablece tu contraseña',
      text: 'Reestablece tu contraseña',
      html: `<p>Hola: ${nombre}, comprueba tu cuenta en APV</p>
          <p>Da click en el enlace para cambiar tu contraseña: 
          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a> </p>
          <p>Si tu no creaste esta cuenta puedes ignorar este mensaje</p>
      `
    });
    console.log('Mensaje enviado: %s', info.messageId)

}

export default emailOlvidePassword;