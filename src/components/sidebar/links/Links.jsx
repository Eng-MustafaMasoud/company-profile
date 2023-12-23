import { motion } from "framer-motion";

const items = ["HomePage", "About", "Services", "Portfolio", "Contact"];

const variant = {
  open: {
    hidden: { opacity: 0.5, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1.2,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  return (
    <motion.div
      className="links"
      variants={variant}
      initial="hidden"
      animate="visible"
    >
      {items?.map((item) => (
        <motion.a
          key={item}
          variants={itemVariants}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2, transition: { duration: 0.8 } }}
          href={`#${item}`}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
