import React, { useEffect, useRef } from 'react'
import {KeyboardArrowRightOutlined} from '@mui/icons-material'
import { gsap } from 'gsap';

const Banner = () => {
  let reinvent = useRef(null)
  return (
    <div className='py-12 w-11/12 overflow-hidden mx-auto mt-10 text-center'>
        <span className='text-white text-8xl font-bold'>REINVENT </span>
        <span className='text-white text-8xl font-bold'>WHAT </span>
        <span className='text-white text-8xl font-bold'>YOUR </span>
        <span className='text-white text-8xl font-bold'>BUSINESS </span>
        <span className='text-white text-8xl font-bold'>COULD </span>
        <span className='text-white text-8xl font-bold'>BE.</span>
      <div className='mt-10 flex justify-center items-center'>
        <p className='text-white text-3xl font-medium'>Let there be change </p>
        <div className='flex justify-center items-center h-6 w-6 bg-violet-700 ml-5'>
          <KeyboardArrowRightOutlined className='text-white'/>
        </div>
      </div>
    </div>
  )
}

export default Banner