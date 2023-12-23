import React, { useRef,useState } from "react";
import "./top.scss";
import { motion, useInView } from "framer-motion";

const arrowVariant = {
  initial: {
    y: 0,
  },
  animate: {
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
      staggerChildren: 0.5,
    },
  },
};
const Top = () => {
  const ref = useRef();
  const [toggle,setToggle]=useState(false)

  const isInView = useInView(ref, { margin: "50px" });
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <motion.button
      variants={arrowVariant}
      initial={"initial"}
      animate={"animate"}
      ref={ref}
      onClick={handleClick}
      className="top"
      aria-labelledby="to-top"
      alt="To TOP"
    >
       { toggle&& <p >To Top</p>}
      <motion.svg
      onMouseEnter={()=>setToggle(true)}
      onMouseLeave={()=>setToggle(false)}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        width="45"
        height="45"
        fill="#FFC436"
        viewBox="0 0 24 24"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
          d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"
        />
        <motion.path
          initial={{ pathLength: 1 }}
          animate={{ pathLength: 0 }}
          transition={{ duration: 1 }}
          d="m7.293 15.293 1.414 1.414L12 13.414l3.293 3.293 1.414-1.414L12 10.586l-4.707 4.707z"
        />
        <motion.path d="m7.293 11.293 1.414 1.414L12 9.414l3.293 3.293 1.414-1.414L12 6.586l-4.707 4.707z" />
      </motion.svg>
     
    </motion.button>
  );
};

export default Top;
