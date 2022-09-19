import React, { useState } from 'react';
import contact from './images/contact.png'
import email1 from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import { validateEmail } from './images/helpers.js';

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!userName || !email || !message) {
      setErrorMessage('Please Fill Required Fields');
      return;
    }

    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="bg-warning bg-gradient">
      <br></br>
      <br></br>
      <h1 className="text-center">Contact Me!</h1>
      <br></br>
      <br></br>
      <br></br>
      <form className="form text-center py-2">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text text-center">{errorMessage}</p>
        </div>
      )}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
             <section id="contact-me" class="contact-me">
        <div class="text-center">
            <img src={contact} alt="Contact Stock Photo"
            width="100px"
            height="100px"></img>
        </div>
        <h2 class="contact-info text-center"> Contact and Connect with Me! </h2>
        </section>
        <br></br>
        <div className="text-center">
            <ul className="text-center d-inline">
                <li className="text-center d-inline">
                    <img src={email1} alt="EmailIcon"
                    width="110"
                    height="110"
                    className="d-inline"></img>
                </li>
                <li className="text-center d-inline">
                    <img src={linkedin} alt="LinkedInIcon"
                    width="100"
                    height="100"
                    className="d-inline"></img>
                </li>
                <li className="text-center d-inline">
                    <img src={phone} alt="PhoneIcon"
                    width="100"
                    height="100"
                    className="d-inline px-2"></img>
                </li>
            </ul>
        </div>
        <ul className="text-center d-inline">
           <li>
               Email: <a href="mailto:arpappagallo@gmail.com">arpappagallo@gmail.com</a>
           </li>
           <li>
                LinkedIn: <a href= "https://www.linkedin.com/in/alex-pappagallo-3630781a2/" >My LinkedIn Profile</a>
            </li>
           <li>
                Phone: <a href="tel:(732)-610-6636">(732)-610-6636</a>
           </li>
        </ul>
    </div>
  );
}

export default Form;