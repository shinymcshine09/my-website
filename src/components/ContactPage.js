import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'default_service',
            'template_hdnu45j',
            form.current,
            'r588IplFP8PloORH4'
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );
    };

    return (
        <body className="ContactContent">
            <div className="Title">
                <h1>Contact</h1>
            </div>
            <div class='typing-contact'>
                <Typewriter
                    options={{
                        strings: ['Send me a message', 'I will reply asap', 'I would love to hear from you'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <br/>
            <div className="ContactForm">
                <form ref={form} onSubmit={sendEmail}>
                    <label className="form-label">
                        Name:
                    </label>
                    <br/>
                    <input 
                        className="form-input" 
                        type="text" 
                        name="from_name"
                        required 
                        placeholder='Name...'
                    />
                    <br/>
                    <label className="form-label">
                        Email:
                    </label>
                    <br/>
                    <input 
                        className="form-input" 
                        type="email" 
                        name="user_email"
                        required 
                        placeholder='Email...'
                    />
                    <br/>
                    <label className="form-label">
                        Message:
                    </label>
                    <br/>
                    <textarea 
                        className="form-input"
                        name="message"
                        placeholder='Message...' 
                        required
                    />
                    <br/>
                    <input className="submit-button" type="submit" value="Send" />
                </form>
            </div>
        </body>
    )
}

export default ContactPage;