import { useState } from "react";
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import { FaBars } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import Images from "../../assets/Images/images";


const Header = () => {
    const [active,Setactive] = useState(false);

    const showNavbar = () => {
        Setactive(!active);
    }
  return (
    <>
    <header className='bg-redish opacity-80 fixed w-full z-10'>
      <nav className='flex items-center justify-between p-3'>
        <Link className="h-12 flex items-center" to='/'><img className="w-full h-28" src={Images.logo} alt="SSS logo" /></Link>
        <DesktopHeader />
        <div className='md:hidden'>
          <FaBars className='scale-150 text-white' onClick={ showNavbar }/>
          <MobileHeader showNavbar={showNavbar} active={active}/>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header