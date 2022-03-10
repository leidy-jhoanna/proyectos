import React from 'react'
import emailjs from '@emailjs/browser';

export const Mailer = () => {
  
  const sendEmail = (event) => {
    event.preventDevault();

    emailjs.sendForm('service_vwoob6o','template_w2k5t3u',event.target,'fE2MaxNzEVpy32XFA')
    .then(response => console.log(response))
    .catch(error => console.log(error))

  }

  return (

    <div className='div-form'>
      <h1 className='title-form'> Contact us</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <hr />

        <label>Email</label>
        <input type="email" name="user_email"/>
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10" ></textarea>
        <hr />
        <button>send</button>
      </form>
    </div>
  )
}
