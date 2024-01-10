import React, { useEffect } from 'react'
import {gsap} from 'gsap'
const Sample = () => {
    useEffect(() => {
        gsap.fromTo('.box',{y:100},{y:0, duration:2})

    },[])
  return (
    <div className='box m-3 h-20 w-20 bg-black'></div>
  )
}

export default Sample