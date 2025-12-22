'use client'
import ThemeToggler from '@/components/helper/ThemeToggler'
import { NavLinks } from '@/constant/Contstant'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuNetwork } from 'react-icons/lu'


type Props = {
    openNav: ()=>void
}

const Nav = ({openNav}:Props) => {
    const [ navBg, setNavBg] = useState(false)

    useEffect(()=>{
        const handler = () =>{
            if(window.scrollY >= 90) setNavBg(true)
            if(window.scrollY < 90) setNavBg(false)
        }
        
        window.addEventListener('scroll',handler)

        return ()=> window.removeEventListener('scroll',handler)
    },[])

  return (
    <div className={`w-full h-[12vh] transition-all duration-200 z-100 fixed 
        ${navBg?'bg-white dark:bg-gray-900 shadow-md': 'fixed'}`}
    >
        <div className='flex justify-between items-center w-[92%] h-full mx-auto'>
            <div className='flex items-center sm:space-x-20'>
                {/* logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 rounded-full flex flex-col items-center justify-center bg-cyan-800 dark:bg-white'>
                        <LuNetwork className='w-5 h-5 text-white dark:text-black' />
                    </div>
                    <h1 className='text-cyan-800 dark:text-white font-bold text-xl hidden sm:block md:text-2xl'>DevHire</h1>
                </div>

                {/* Nav links */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {
                        NavLinks.map(link=>{
                            return <Link 
                                        key={link.id} 
                                        href={link.url}
                                        className='text-base font-medium hover:text-cyan-700 dark:hover:text-cyan-200 transition-all duration-200'
                                    >
                                        <p>{link.label}</p>
                                    </Link>
                        })
                    }
                </div>
            </div>
            {/* Buttons */}
            <div className='flex items-center space-x-4'>
                {/* Login /Register button */}
                <button className='px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 
                    hover:bg-gray-300 dark:hover:bg-gray-900 transition-all duration-300 '>
                        Login / Register
                </button>
                {/* Job post button */}
                <button className='px-8 py-2.5 hidden sm:block text-sm cursor-pointer rounded-lg
                    bg-cyan-700 hover:bg-cyan-900 transition-all duration-300 text-white'>
                        Job Post
                </button>
                {/* Theme toggler */}
                <ThemeToggler />
                {/* Burger menu */}
                <HiBars3BottomRight 
                    onClick={openNav}
                    className='w-8 h-8 cursor-pointer text-black lg:hidden' 
                />
            </div>
        </div>
    </div>
  )
}

export default Nav