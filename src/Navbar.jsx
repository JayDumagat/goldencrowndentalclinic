import { useState} from "react";
import Logo from "./assets/Logo.png";
import {FaBars, FaTimes, FaFacebook ,FaLinkedin, FaMapPin} from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import {Link} from 'react-scroll';
function Navbar(){
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const closeMobileMenu = () => setNav(false)
    return (
        

        <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#5E92F2] px-4 text-white">
            <div className="flex justify-between items-center font-bold text-[#FEF6A0]">
                <img src={Logo} alt="Logo" style={{width:'50px'}}/> Golden Crown
            </div>

            {/*This is for the navbar links / Web version*/}
            <ul className='  hidden md:flex  '>
          
                <li className="hover:text-[#FEF6A0] font-bold py-2">
                    <Link to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>

                <li className="hover:text-[#FEF6A0] font-bold py-2">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
          
                <li className="hover:text-[#FEF6A0] font-bold py-2">
                <Link to="services" smooth={true} duration={500}>
                        Services
                    </Link>
                </li>
          
                <li className="hover:text-[#FEF6A0] font-bold py-2">
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
          
                <li className="bg-white text-[#0B1E40] font-bold py-2 rounded-3xl hover:bg-[#0D2249] hover:text-[#FEF6A0] duration-300">
                <Link to="contact" smooth={true} duration={500}>
                        Book Now
                    </Link>
                </li>
        
            </ul>

            {/*Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>

                {!nav ? <FaBars/> : <FaTimes/>}

            </div>

            {/*Mobile Navbar*/}
            <ul className={!nav ? 'hidden' :  'absolute top-0 left-0 w-full h-screen items-center bg-[#5E92F2] text-white flex flex-col justify-center'}>
          
                <li className="py-6 text-4xl">
                    <Link onClick={closeMobileMenu} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>

                <li className="py-6 text-4xl">
                    <Link onClick={closeMobileMenu} to="about" smooth={true} duration={500}>
                        About
                    </Link></li>
          
                <li className="py-6 text-4xl">
                    <Link onClick={closeMobileMenu} to="services" smooth={true} duration={500}>
                        Services
                    </Link></li>
          
                <li className="py-6 text-4xl">
                    <Link onClick={closeMobileMenu} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>
          
                <li className="py-6 text-4xl">
                    <Link onClick={closeMobileMenu} to="contact" smooth={true} duration={500}>
                        Book Now
                    </Link>
                </li>
    
            </ul>

            {/*Social Icons*/}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>

                <ul>

                    <li className="w-[160px] h-[60px] flex justify-between bg-[#F38088] text-white items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a classname="flex justify-between items-center w-full text-gray-100" href="https://www.facebook.com/goldencrowndentalclinic">Facebook</a> <FaFacebook  size={30}/>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between bg-[#F38088] text-white items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a classname="flex justify-between items-center w-full text-gray-100" href="https://www.linkedin.com/in/anne-marjorie-de-leon-0b88a2110/">Linkedin</a><FaLinkedin  size={30}/>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between bg-[#F38088] text-white items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        <a classname="flex justify-between items-center w-full text-gray-100" href="mailto:goldencrown.deleon@gmail.com">Email</a><HiOutlineMail  size={30}/>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between bg-[#F38088] text-white items-center ml-[-100px] hover:ml-[-10px] duration-300">
                        
                        <a classname="flex justify-between items-center w-full text-gray-100" 
                        href="https://www.google.com/maps/place/GOLDEN+CROWN+DENTAL+CLINIC/@14.4302681,121.0111452,17z/data=!3m1!4b1!4m6!3m5!1s0x3397d1dd2a41fb13:0x8ffe589617aafcd8!8m2!3d14.4302681!4d121.0133339!16s%2Fg%2F11g6bj2fdq">Google Maps</a><FaMapPin  size={30}/>
                    </li>

                </ul>

            </div>



        </div>
    );
}

export default Navbar;