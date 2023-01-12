import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Fullpage from "./FullPageScroll";

class App extends React.Component {
  render() {
    return (
    <>
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path="/About" element={ <About /> } />
              <Route path="/ContactMe" element={ <ContactMe /> } />
              <Route path="/Projects" element={ <Projects /> } />
              <Route path="/x" element={ <Fullpage /> } />
            </Routes>
          </div>
        </div>
      </Router>
      <footer>
        <p class='Author'>
          Author: James Hart<br/>
          <a href="mailto:js.hart@hotmail.com">
            js.hart@hotmail.com
          </a>
        </p>
      </footer>
    </>
    )
  }
}

export default App;