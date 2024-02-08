import { Link } from "react-router-dom"
import { FaFacebook ,FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Images from "../assets/Images/images";


const Footer = () => {
  return (
<footer className="bg-bluish dark:bg-bluish border-t mt-2" style={{boxShadow:'rgba(0, 0, 0, 0.09) 0px 2px 4px 0px inset'}}>
    <div className="mx-auto w-full max-w-screen-xl pt-6 lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center h-20">
                <img className="w-44 h-30" src={Images.logo} alt="SSS logo" />
              </Link>
              <div className="flex gap-6 m-4 text-white">
                <Link to="/" className="flex items-center">
                    <FaFacebook className='scale-150' />
                </Link>
                <Link to="/" className="flex items-center">
                    <FaInstagram className='scale-150' />
                </Link>
                <Link to="/" className="flex items-center">
                    <FaXTwitter className='scale-150'  />
                </Link>
                <Link to="/" className="flex items-center">
                    <FaLinkedin className='scale-150'  />
                </Link>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <ul className="text-white dark:text-white font-medium">
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">aboutus</Link>
                      </li>
                      <li  className="mb-2">
                          <Link to="/" className="hover:underline">sitemap</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Credits</Link>
                      </li>
                      <li  className="mb-2">
                          <Link to="/" className="hover:underline">Help Center</Link>
                      </li>
                      <li  className="mb-2">
                          <Link to="/" className="hover:underline">Community Guidelines</Link>
                      </li>
                      
                  </ul>
              </div>
              <div>
                  <ul className="text-white dark:text-white font-medium">
                      <li className="mb-2">
                          <Link to="/" className="hover:underline ">Accessibility</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Mobile</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline ">Marketing</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Advertising</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="/" className="hover:underline">Report Issue</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <ul className="text-white font-medium">
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Terms &amp; Safety</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex justify-start flex-col ">
          <span className="text-xs text-white  dark:text-white">All trademarks are the property of their respective owner</span>
          <span className="text-xs text-white dark:text-white">All rights are reserved &copy; 2024 SSS Pvt.Ltd</span>
      </div>
    </div>
</footer>

  )
}

export default Footer