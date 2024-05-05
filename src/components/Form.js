import "./FormStyles.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cv0qkoj', 
        'template_jb1zb2f', 
        form.current, {
        publicKey: '1FRm65PN8SfESbdqc'
      })
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent");
          // Clear form fields
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" /><br/>
            <label>Email</label>
            <input type="email" name="user_email" /><br/>
            <label>Subject</label>
            <input type="text" name="user_subject" /><br/>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Type your message here"/><br/>
            <button className="btn">Submit</button>
        </form>
        {message && <div>{message}</div>}
    </div>
  );
};

export default Form;
