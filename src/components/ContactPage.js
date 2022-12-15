import React from "react";
import Typewriter from "typewriter-effect";

const ContactPage = () => {
    return (
        <body className="ContactContent">
            <div className="Title">
                <h1>Contact</h1>
            </div>
            <div class='typing-contact'>
                <Typewriter
                    options={{
                        strings: ['Send me a message if you want to speak to me', 'I will reply asap', 'I would love to hear from you'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <br/>
            <div className="ContactForm">
                <form>
                    <div>
                        <label className="form-label" htmlFor="name">
                            Name:
                        </label>
                        <br/>
                        <input className="form-input" type="text" id="name" required placeholder='Name...'/>
                    </div>
                    <br/>
                    <div className="EmailInput">
                        <label className="form-label" htmlFor="email">
                            Email:
                        </label>
                        <br/>
                        <input className="form-input" type="email" id="email" required placeholder='Email...' />
                    </div>
                    <br/>
                    <div className="MessageInput">
                        <label className="form-label" htmlFor="message">
                            Message:
                        </label>
                        <br/>
                        <textarea className="form-input" id="message" required placeholder='Message...'/>
                    </div>
                    <br/>
                    <button type="button">
                        Submit
                    </button>
                </form>
            </div>
        </body>
    )
}

export default ContactPage;