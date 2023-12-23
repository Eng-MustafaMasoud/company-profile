import React, { useRef } from "react";
import mountain from "../../assets/mountains.png";
import planet from "../../assets/planets.png";
import sun from "../../assets/sun.png";

import { motion, useScroll, useTransform } from "framer-motion";

import "./parallax.scss";

export const ParallaxSection = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const Ybg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const YbgStar = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const Ytext = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  return (
    <section
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "service"
            ? "linear-gradient(180deg , #111132,#0c0c1d)"
            : "linear-gradient(180deg , #111132,#505064)",
      }}
    >
      <div className="parallax-title">

      <motion.h1  style={{y:Ytext}}>
        {type === "service" ? (
          "What we do"
        ) : (
       "  our work"
        )}
      </motion.h1>
      </div>
      <motion.div className="mountain">
        <img src={mountain} alt="mountains" />
      </motion.div>
      <motion.div className="planets" >
        {type === "service" ? (
          <motion.img style={{y:Ybg}}src={planet} alt="planets" />
        ) : (
          <motion.img src={sun} alt="sun" style={{y:Ybg}}/>
        )}
      </motion.div>
      <motion.div className="star" style={{x:YbgStar}}></motion.div>
    </section>
  );
};
