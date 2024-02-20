/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import Images from "../assets/Images/images";

const Hero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach(element => {
      element.classList.add('animate');
    });
  }, );

  return (
  <div id='home' className="flex items-center justify-center pt-20 flex-wrap-reverse" >
        <div   className="animate-on-load animate-text">
          <h1 className="text-4xl font-bold w-64">WEB DESIGN & DIGITAL MARKETING</h1>
          <p className="break-words w-60 mb-2">"Building Tomorrow's Digital Presence Today - Elevate Your Brand with Expert Web Development"</p>
          <a href='/#ContactUs'><button className="p-3 bg-bluish hover:bg-purplish text-white text-sm rounded-full">Get Started</button></a>
        </div>
        <div className="animate-on-load animate-image">
          <img src={Images.HeroImage} className='w-full' alt="Web marketing image" />
        </div>
      </div>
  );
};

export default Hero;
