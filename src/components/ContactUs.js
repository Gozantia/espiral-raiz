import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = form.current;

  if (!user_name.value || !user_email.value || !message.value) {
    console.log('Por favor completa todos los campos');
    return;
  }
      
    emailjs
      .sendForm('service_hn14avs', 'template_umklm7b', form.current, {
        publicKey: 'cQNAaNli5HJXRc1Vn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='main-section'>
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
    </section>
  );
};

export default ContactUs;