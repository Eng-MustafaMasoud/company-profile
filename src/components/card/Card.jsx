import './card.scss';
import {motion} from 'framer-motion'
const cards = [
  {
    title: "Web Developing",
    info: "25+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.",
  },
  {
    title: "Web Designing",
    info: "In our portfolio of 19+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation",
  },
  {
    title: "Ecommerce",
    info: " ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes ",
  },
  {
    title: "Web portals",
    info: "web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users",
  },
];
const Card = () => {
  return (
    <div className="cards">
      {cards.map((card,idx) => (
        <motion.div className="card" key={idx} whileHover={{backgroundColor:"#A5A50A",color:"#fff"}} >
          <motion.h3 whileHover={{color:"#fff"}} className="card-title">{card.title}</motion.h3>
          <motion.p className="card-info">{card.info}</motion.p>
          <motion.button whileHover={{bacgroundColor:"#fff"}} className="card-btn">Go</motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
