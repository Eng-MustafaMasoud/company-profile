import React, { useEffect } from "react";
import { preLoaderAnim } from "./animate";
import './preloader.scss'
// import bulb from '../../assets/bulb.png'



const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();

    return ()=>preLoaderAnim();
 }, []);
  return (
    <div className="preloader">
      {/* <div className="image-container">
        <img src={bulb} alt="bulb" />
      </div> */}
      <span className="loader"></span>

      <div className="texts-container">
<h1>Mustafa Masoud</h1>
<div className="text">

        <span>Full Stack </span>
        <span> Web  </span>
        <span>Developer</span>
</div>
       
      </div>
    </div>
  );
};

export default PreLoader;
