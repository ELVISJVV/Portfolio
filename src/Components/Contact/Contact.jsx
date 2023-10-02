import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
const { VITE_SERVICE_ID, VITE_PUBLIC_KEY, VITE_TEMPLATE_ID } = import.meta.env;

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: "#AF1FF94" }}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text"
                        name="user_name"
                        className='user'
                        placeholder='Name' />

                    <input type="email"
                        name="user_email"
                        className='user'
                        placeholder='Email' />

                    <textarea
                        name="message"
                        className='user'
                        placeholder='Message' />

                    <input type="submit" value="Send" className='button' />
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact