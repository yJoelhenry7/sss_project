
const DesktopHeader = () => {
  return (
    <>
        <ul className='hidden md:flex gap-4 items-center text-white text-semibold'>
            <li className="hover:cursor-pointer no-underline"><a href='/#home'>Home</a></li>
            <li className="hover:cursor-pointer no-underline"><a href='/#about'>About</a></li>
            <li className="hover:cursor-pointer no-underline"><a href='/#Services'>Services</a></li>
            <li className="hover:cursor-pointer no-underline"><a href='/#ContactUs'>Contact Us</a></li>
        </ul>
    </>
  )
}

export default DesktopHeader