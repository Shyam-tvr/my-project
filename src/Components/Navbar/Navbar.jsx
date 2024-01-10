import React, { useEffect, useRef } from 'react'
import { KeyboardArrowDownOutlined, LanguageOutlined, Search } from '@mui/icons-material';
import gsap from 'gsap';

const Navbar = () => {
    let nav = useRef(null)
    let prevScrollpos = window.pageYOffset
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            nav.style.top="0"
        } else {
            nav.style.top="-64px"
        }
        prevScrollpos = currentScrollPos
    }
  return (
    <div style={{transition:"top 0.3s"}} className='navbar h-16 w-full bg-black fixed top-0 z-10' ref={elem => nav = elem}>
        <div className='h-full container mx-auto flex justify-between'>
            <div className='h-full px-4 text-white flex items-center font-bold text-xl'>Logo.</div>
            <div className='h-full text-white w-2/4'>
                <ul className='h-full w-full flex justify-around items-center '>
                    <li className='text-sm cursor-pointer hover:text-[rgba(255,255,255,0.5)]'>Home </li>
                    <li className='text-sm cursor-pointer  hover:text-[rgba(255,255,255,0.5)]'>Services</li>
                    <li className='text-sm cursor-pointer  hover:text-[rgba(255,255,255,0.5)]'>About</li>
                    <li className='text-sm cursor-pointer  hover:text-[rgba(255,255,255,0.5)]'>Features</li>
                    <li className='text-sm cursor-pointer  hover:text-[rgba(255,255,255,0.5)]'><a href='#testmonials'>Testmonials</a></li>
                    <li className='text-sm cursor-pointer  hover:text-[rgba(255,255,255,0.5)]'><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className='h-full flex items-center px-3'>
                <Search sx={{fontSize:"20px"}} className="cursor-pointer text-white "/>
                <div className='flex mx-10 items-center cursor-pointer '>
                    <LanguageOutlined sx={{fontSize:"18px"}} className="text-white"/>
                    <p className='text-white px-2'>India</p>
                    <KeyboardArrowDownOutlined sx={{fontSize:"20px"}} className="text-white"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar