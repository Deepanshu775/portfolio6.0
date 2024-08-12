import React, { useState } from 'react';
import './Footer.css';
import user_logo from '../../assets/user_icon.svg';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = async () => {
    console.log('Subscribe button clicked'); // Debugging

    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    try {
      const response = await emailjs.send(
        'service_smkaz7f', // Replace with your EmailJS service ID
        'template_8w2bnwz', // Replace with your EmailJS template ID
        { email },
        'PBzEA5aOCrAuvBF_m' // Replace with your EmailJS public key
      );

      console.log(response); // Debugging
      if (response.status === 200) {
        setMessage('Thank you for subscribing!');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <hr />
          <p>
            Deepanshul
            <br />
            As a dedicated Front-End Developer with a robust foundation in Electronics and Communication Engineering.
          </p>
        </div>

        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_logo} alt='User Icon' />
            <input
              type='email'
              placeholder='Enter your Email'
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <button className='subscribe' onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>

      {message && <div className='subscription-message'>{message}</div>}
    </div>
  );
};

export default Footer;
