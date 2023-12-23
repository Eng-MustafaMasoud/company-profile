import { useState } from "react";
import { motion } from "framer-motion";
// components
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
// import styles
import "./sidebar.scss";

const variants = {
  open: {
    clipPath: "circle(1400px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
  closed: {
    clipPath: "circle(25px at 2% 3rem)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg">
        <Links />
      </motion.div>
      <div className="responsive">
        <ToggleButton setOpen={setOpen} />
        {/* <span className="res">Mustafa Masoud</span> */}
      </div>
    </motion.div>
  );
};

export default Sidebar;
