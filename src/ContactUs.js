import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

export const ContactUs = () => {
  const form = useRef();
  const [msg,setmsg]=useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    alert('Please wait, your form is being uploaded.');

    emailjs
      .sendForm('service_j3y175q', 'template_1n6d46c', form.current, {
        publicKey: 'yrERE95DyXEtNpfV2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setmsg('Your form has been submitted successfully.')
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setmsg('Oops, something went wrong. Your form submission failed.')
          e.target.reset();
        },
      );
  };

  return (

    <form ref={form} onSubmit={sendEmail} className='form'>
      <h1> Contact Form </h1>
      <span  style={{ backgroundColor: msg==='Your form has been submitted successfully.' ? 'green' : 'red',textAlign:'center',zIndex:'1',fontSize:'small' }} >{msg}</span>
      
      <div id='name'>
      <label>Name</label>
      <input type="text" name="from_name"  required/></div>
      <div id='email'>
      <label>Email</label>
      <input type="email" name="from_email" required/></div>
      <div id='message'>
        <label>Message</label>
      <textarea name="message" required/></div>
      <div id='button'><input type="submit" value="Send" /></div>
      
    </form>
  );
};