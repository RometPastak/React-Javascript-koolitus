import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from "react-bootstrap/Button";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const data = {
      "from_name": nameRef.current.value,
      "from_email": emailRef.current.value,
      "message": messageRef.current.value
    }

    emailjs.send('service_e3xtvsi', 'template_uapxi4h', data, 'XAdlUtKwuKBMdc8av')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <label>Name</label><br />
      <input ref={nameRef} type="text" /><br /><br />
      <label>Email</label><br />
      <input ref={emailRef} type="email" /><br /><br />
      <label>Message</label><br />
      <textarea ref={messageRef} /><br /><br />
      <Button onClick={sendEmail}>Send</Button>
    </div>
  );
}

export default Contact;