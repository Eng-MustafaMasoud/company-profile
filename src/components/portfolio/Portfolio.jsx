import { useRef } from "react";
import "./portfolio.scss";
import {motion,useScroll,useSpring,useTransform} from 'framer-motion'

const items = [
  {
    id: 1,
    title: "React e-commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima.",
    image:
      "https://images.unsplash.com/photo-1691073112675-9685bc6779bf?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    title: "Nextjs Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima.",
    image:
      "https://images.unsplash.com/photo-1697927024125-1f7eb9aaa9cf?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "React Music app",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima.",
    image:
      "https://images.unsplash.com/photo-1696197018935-fe03c621838f?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "React Health app",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima.",
    image:
      "https://images.unsplash.com/photo-1697817292223-2e8ffb72c82d?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  },
];




const Single = ({item}) => {
    const ref=useRef()

    const {scrollYProgress}=useScroll({
        target:ref,
        // offset:["start start","end start"]
        
    })

    const y=useTransform(scrollYProgress,[0,1],[-200,200])
    return(
        (
            <div className="portfolio-wrapper" >
              <div className="imageContainer" >
                <img src={item.image} alt="image" />
              </div>
              <motion.div className="textContainer" ref={ref} style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc} </p>
                <a href="#">View Demo</a>
              </motion.div>
            </div>
          )
    )
}

const Portfolio = () => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"]
    })

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:20
    })
  return (
    <div className="portfolio" id="Portfolio" ref={ref}>
            <div className="title">
                <h1>Featured Work</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
      {items?.map((item) => (
        <section className="portfolio-container" key={item.id}>
          <Single item={item} />
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
