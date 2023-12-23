import {useRef}  from 'react'
import "./services.scss";
import { motion ,useInView} from "framer-motion";

// images
import office from "../../assets/people.webp";

// components
import Card from "../../components/card/Card";

const variants = {
  initial: {
    x: -100,
    y: 10,
    opacity: 50,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const ServicesSection = () => {
  const ref=useRef()
  return (
    <motion.section
      id="Services"
      className="services "
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="note">
        <p>
          i focus on helping your brand to grow <br />
          <span>and more forward</span>
        </p>
        <span className="line" />
      </div>
      <motion.div className="servicesWrapper" variants={variants}>
        <motion.div className="title-container" variants={variants}>
          <div className="subtitle">
            <div className="office">
              <img src={office} alt="office" />
            </div>
            <motion.p>
              {" "}
              <motion.span whileHover={{ color: "rgb(165, 165, 10)" }}>
                Unique
              </motion.span>{" "}
              <span className="animate">Ideas</span>
            </motion.p>
          </div>
          <motion.div className="servicesTitle" variants={variants}>
            <h1>
              <span className="animate">For Your</span>{" "}
              <motion.span whileHover={{ color: "rgb(165, 165, 10)" }}>
                Business
              </motion.span>
            </h1>
            <motion.button className="services-btn">What We Do?</motion.button>
          </motion.div>
        </motion.div>
        <div className="service-cards">
          <Card />
        </div>
      </motion.div>
    </motion.section>
  );
};
