import React from "react";
import profile from "../../assets/hero.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import scroll from "../../assets/scroll.png";
import { motion } from "framer-motion";
import "./hero.scss";

const textStyle = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    staggerChildren: 0.5,
    transition: { duration: 1 },
  },
};
const buttonStyle = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    staggerChildren: 0.7,
    transition: { duration: 1.5 },
  },
};
const profileStyle = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    staggerChildren: 0.1,
    transition: { duration: 1 },
  },
};
const imgStyle = {
  initial: {
    y: -10,
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 0.5,
    transition: {
      duration: 2,
      repeat: Infinity,
      staggerChildren: 0.5,
    },
  },
};
const styledTextVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroWrapper">
        <div className="herowrapper">
          <motion.div
            className="textContainer"
            variants={textStyle}
            initial="initial"
            animate="animate"
          >
            
            <h1>Web Developer , MERN Stack developer</h1>
            <p className="">Web Technologies ,Business ,Ecommerce and more</p>

          </motion.div>
          <motion.div
            className="buttons"
            variants={buttonStyle}
            initial="initial"
            animate="animate"
          >
            <button>
              <a href="#Portfolio">see latest work</a>
            </button>
            <button>
              <a href="#Contact">Contact us</a>
            </button>
          </motion.div>
          <motion.div
            className="img"
            variants={imgStyle}
            initial="initial"
            animate="animate"
          >
            <motion.img src={scroll} alt="" />
          </motion.div>
        </div>
        <motion.div
          variants={profileStyle}
          initial="initial"
          animate="animate"
          className="imageContainer image-phone"
        >
          <LazyLoadImage
            className="profile"
            src={
              "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
            }
            alt="profile"
            effect="blur"
          />
        </motion.div>

        <motion.div
          className="styled-text"
          variants={styledTextVariant}
          initial={"initial"}
          animate={"animate"}
        >
          Software Developer
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
