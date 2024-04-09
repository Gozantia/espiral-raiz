import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [ showSuccess, setShowSuccess ] = useState('hide');
  const [ show, setShow ] = useState('hide');
  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = form.current;

  if (!user_name.value || !user_email.value || !message.value) {
    console.log('Por favor completa todos los campos');
    setShow('show');
    return;
  }
      
    emailjs
      .sendForm('service_hn14avs', 'template_umklm7b', form.current, {
        publicKey: 'cQNAaNli5HJXRc1Vn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShow('hide');
          setShowSuccess('show');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='main-section' id="contacto">
    <h2>Contáctanos</h2>
    
    <form ref={form} onSubmit={sendEmail} className='contacto'>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" />
    </form>
    <div className={`msj-errorform ${show}`}>
      <span> Por favor completa todos los campos </span>
    </div>

    <div className={`msj-success-form ${showSuccess}`}>
      <span> Tu mensaje ha sido enviado, intentaremos responderte vía correo lo más pronto posible </span>
    </div>

    </section>
  );
};

export default ContactUs;