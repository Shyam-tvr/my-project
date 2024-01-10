import React, { useState } from 'react'
import {EastOutlined, KeyboardArrowRightOutlined, PauseOutlined, WestOutlined} from '@mui/icons-material'
import { content } from "../../Content/carousel"
const Carousel = () => {
    const [num,setNum] = useState(0)
    const handleNext = () => {
        setNum(num+1)
        if (num > 3) {
            setNum(0)
        }
    }
    const handlePrevoius = () => {
        setNum(num-1)
        if (num < 1) {
            setNum(4)
        }
    }
  return (
    <div className='container flex mx-auto mt-24 gap-8'>
        <div className='w-2/4 h-full'>
            <div className='w-full min-h-[26rem]'>
                <img src={`${content[num].imageUrl}`} alt="" />
            </div>
            <div className='my-8 flex justify-center'>
                <div onClick={handlePrevoius}><WestOutlined className='text-white' /></div>
                <div ><PauseOutlined className='text-white mx-4'/></div>
                <div onClick={handleNext}><EastOutlined className='text-white'/></div>
            </div>
        </div>
        <div className='w-2/4 flex flex-col justify-center items-end relative'>
            <div className='w-[30rem]'>
                <p className='text-3xl font-semibold'>{content[num].title}</p>
                <p className='mt-4'>{content[num].content}</p>
                <div className='mt-8 flex items-end'>
                    <p className='text-white text-xl font-medium'>Read More</p>
                    <div className='flex justify-center items-center h-6 w-6 bg-violet-700 ml-4'>
                        <KeyboardArrowRightOutlined className='text-white'/>
                    </div>
                </div>
            </div>
            <span className='w-2 h-2 bg-white absolute bottom-10 right-0'></span>
        </div>
    </div>
  )
}

export default Carousel