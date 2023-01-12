import React from "react";
import '../images/me.jpeg'
import NavigationBar from "../components/NavigationBar";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <AboutContent />
      <NavigationBar />
    </div>
  );
};
  
export default About;