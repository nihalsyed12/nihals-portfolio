import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import ProfileImg from '../assets/NihuPihu.jpg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#345983] text-gray-300'>
      <div>
        <img src={ProfileImg} alt='profile image' style={{width: '80px'}} />
      </div>

      {/* Menus */}
        <ul className='hidden md:flex'>
            <li>
              <Link to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to='skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to='projects' smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='experience' smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to='contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
        </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#345983] flex flex-col justify-center items-center'}>
      <ul>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
        </ul>
      </div>
      {/* social icons */}
      <div className='flex fixed bottom-0 left-0 right-0 justify-center lg:top-[35%] lg:left-0 lg:flex-col lg:justify-start lg:items-start'>
        <ul className='flex lg:flex-col bg-white rounded-t-lg lg:rounded-none lg:bg-transparent'>
            <li className='w-[60px] h-[60px] lg:w-[160px] lg:h-[60px] flex justify-center items-center lg:justify-between lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/nihalsyed/'>
                <span className='hidden lg:block'>LinkedIn</span><FaLinkedin size={30} />
                    
                </a>
            </li>
            <li className='w-[60px] h-[60px] lg:w-[160px] lg:h-[60px] flex justify-center items-center lg:justify-between lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/nihalsyed12'>
                  <span className='hidden lg:block'>GitHub</span><FaGithub size={30} />
                </a>
            </li>
                <li className='w-[60px] h-[60px] lg:w-[160px] lg:h-[60px] flex justify-center items-center lg:justify-between lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-[#8C6057]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='mailto:syednihal4@gmail.com'>
                <span className='hidden lg:block'>Email</span><HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[60px] h-[60px] lg:w-[160px] lg:h-[60px] flex justify-center items-center lg:justify-between lg:ml-[-100px] lg:hover:ml-[-10px] duration-300 bg-[#C03221]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1F-A3OpNZHLID10sjo1TgZ4OpW_6j17IK/view?usp=sharing'>
                <span className='hidden lg:block'>Resume</span><BsFillPersonLinesFill size={30} />
                </a>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
