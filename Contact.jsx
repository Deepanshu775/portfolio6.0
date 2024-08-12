import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2a2ae6db-3ec6-4cfd-a916-570b7fafea89");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Your message has been sent successfully!");
        } else {
          console.log("Error", res);
          alert("There was an error sending your message. Please try again later.");
        }
      };

    return (
        <div id="contact" className='contact'>
            <div className='contact-title'>
                <img src={theme_pattern} alt='' />
            </div>

            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Get in touch</h1>
                    <p>I am currently available and excited to take on new projects! If you have an idea, need assistance, or just want to discuss how we can collaborate, feel free to reach out. I’m open to opportunities and ready to bring your vision to life. Don’t hesitate to contact me anytime; I look forward to connecting with you!</p>

                    <div className='contact-details'>
                        <div className='contactdetailme'>
                            <img src={mail} alt='' /> 
                            <p>gujjartarun136@gmail.com</p>
                        </div>
                        <div className='contactdetailme'>
                            <img src={call} alt='' /> 
                            <p>+9192xxxx8</p>
                        </div>
                        <div className='contactdetailme'>
                            <img src={location} alt='' /> 
                            <p>Noida, India</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' required />

                    <label htmlFor='email'>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' required />

                    <label htmlFor='message'>Write your message here</label>
                    <textarea name='message' placeholder='Enter your Message' required></textarea>

                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

