import { KeyboardArrowRightOutlined } from '@mui/icons-material'
import React from 'react'

const Culture = () => {
  return (
    <div className='container flex mx-auto mt-24 gap-8'>
        <div className='w-2/4 h-full'>
            <img src="https://dynamicmedia.accenture.com/is/image/accenture/A1-A.com-Careers-Module-Image?qlt=85&ts=1704380917984&$1024-PNG$&dpr=off" alt="" />
            <img src="https://dynamicmedia.accenture.com/is/content/accenture/Added%20Media-1?ts=1704380917991&dpr=off" alt="" />
        </div>
        <div className='w-2/4 flex flex-col justify-center items-end relative'>
            <div className='w-[30rem]'>
                <p className='text-5xl font-semibold'>Our culture</p>
                <p className='mt-4 text-3xl' style={{fontFamily:"playfair"}}>We combine technology with human ingenuity to solve some of the world's biggest challenges. When you work with us, the possibilities are endless.</p>
                <div className='mt-8 flex items-end'>
                    <p className='text-white text-xl font-medium'>Join us</p>
                    <div className='flex justify-center items-center h-6 w-6 bg-violet-700 ml-4'>
                        <KeyboardArrowRightOutlined className='text-white'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Culture