import React, { useContext, useRef } from 'react'
import './Contact.css'
import phone from '../../image/phone.png'
import Email from '../../image/email.png'
import Address from '../../image/address.png'
import { ThemeContext } from '../../context'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const {darkMode} = useContext(ThemeContext);

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rh4mbmc', 'template_0geh83d', formRef.current, '7yJs5Kc4Tq7w-ZCEj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();

    }
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's Discuss Your Project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="" 
                        className="c-icon" />
                        09066487638
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" 
                        className="c-icon" />
                        Obasanjo Road, Dutse Abuja
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" 
                        className="c-icon" />
                        wokodavid001@gmail.com
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Get in touch, Let's Discuss your Project</b> 
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Name" name="user_name"/>
                    <input  style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Subject" name="user_subject"/>
                    <input  style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor: darkMode && '#333'}} name="message" rows="5" placeholder="Message"></textarea>
                    <button>Submit</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact