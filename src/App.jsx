import React, { useEffect, useRef } from "react";


// import Sections
import About from "./components/about/About";
import {
  HeroSection,
  ParallaxSection,
  ServicesSection,
  ContactSection,
} from "./sections";

// import gsap from "gsap";
// import { AnimatePresence } from "framer-motion";


// component
import Portfolio from "./components/portfolio/Portfolio";
import Cursor from "./components/animatedCursor/AnimatedCursor";
// import styles
import "./App.scss";
import PreLoader from "./components/preloader/PreLoader";
import Top from "./components/topButton/Top";

function App() {


  // useEffect(() => {
  //   // set viewport width, for mobile devices.
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);

  //   // To stop the app from flashing, we hide the entire body in the css and then show it when the JavaScript loads.
  //   gsap.to("body", 0, { css: { visibility: "visible" } });
  //   // custom cursor
   

  // }, []);
  return (
    
    <div className="container">
      <Cursor />
    <PreLoader/>
    <Top/>
      <HeroSection />
      {/* <About/> */}
      <ParallaxSection type={"service"} />
      <ServicesSection />
      <ParallaxSection type={"portfolio"} />
      <Portfolio />
      <ContactSection />
    

    </div>
  
  );
}

export default App;
