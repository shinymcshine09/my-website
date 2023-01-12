import React from "react";
import '../images/mesquare.tiff'
import Zoom from 'react-reveal/Zoom';
import NavigationBar from "../components/NavigationBar";
import ProjectContent from "../components/ProjectContent";
import AboutContent from "../components/AboutContent";
import ContactForm from "../components/ContactForm";
  
const Home = () => {
  return (
    <div>
      <body class='HomeContent'>
        <Zoom>
          <div id="PageTitle">
            <h1>James Hart</h1>
          </div>
        </Zoom>
        <Zoom>
          <div className="HomeCircle">
            <img src={require("../images/mesquare.tiff")} alt="James"/>
          </div>
        </Zoom>
        <ProjectContent />
        <AboutContent />
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
          
        </div>
      </body>
      <NavigationBar />
    </div>
  );
};
  
export default Home;