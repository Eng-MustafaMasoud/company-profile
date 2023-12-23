// import images
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import github from '../../assets/github.png'

//  import component 
import Sidebar from '../sidebar/Sidebar'


// import libs
import {motion} from 'framer-motion'

// import styles
import './navbar.scss'



const Navbar = () => {
  return (
    <div className='navbar'>
     <Sidebar/>
      <div className="wrapper">
        <motion.span className="main-title" animate={{opacity:1,scale:1,duration:2}} initial={{opacity:[0,1.5],scale:0}}><a href="/">Mustafa Masoud</a></motion.span>
        <div className="social">
          <a href="#"><img src={facebook} alt="facebook" /></a>
         <a href="#"><img src={instagram} alt="instagram" /></a> 
          <a href="#"><img src={youtube} alt="youtube" /></a>
          <a href="#"><img src={github} alt="github" /></a>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar