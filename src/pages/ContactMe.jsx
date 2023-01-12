import React from "react";
import ContactForm from "../components/ContactForm";
import NavigationBar from "../components/NavigationBar";
  
const ContactMe = () => {
  return (
    <div>
      <body class='ContactContent'>
      <div id="PageTitle">
        <h3>Contact Me</h3>
      </div>
      <p>
        If you wish to get in contact please fill out the form below and I will get back to you.
      </p>
      <br />
      <div className="ContactForm">
        <ContactForm />
      </div>
      </body>
      <NavigationBar />
    </div>
  );
};
  
export default ContactMe;