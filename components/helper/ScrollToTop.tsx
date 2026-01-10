"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    // show and hide functionality
    useEffect(()=>{
        const toggleVisibility = ()=>{
            if(window.scrollY > 300) setIsVisible(true)
            else setIsVisible(false)
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    },[])

    // Scroll functionality
    const scrollToTop = () =>{
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }

  return (
    <div className='bottom-4 right-4 fixed animate-pulse'>
        {
            isVisible && (
                <button 
                    className='bg-blue-700 text-white cursor-pointer w-12 h-12 rounded-full flex items-center justify-center focus:outline-none'
                    onClick={scrollToTop}
                >
                    <FaArrowUp />
                </button>
            )
        }
    </div>
  )
}

export default ScrollToTop