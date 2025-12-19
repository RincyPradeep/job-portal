import { NavLinks } from '@/constant/Contstant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type Props={
  showNav: boolean,
  closeNav: ()=>void
}

const MobileNav = ({showNav,closeNav}:Props) => {
  const navOpen = showNav?"translate-x-0": "translate-x-[100%]"
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 w-full h-screen transform transition-all duration-500 right-0
       bg-black opacity-70 z-200`}
      >
      </div>
      
      {/* nav links */}
      <div className={`bg-cyan-800 ${navOpen} text-white fixed flex flex-col justify-center right-0 
        w-[80%] sm:w-[60%] h-full transform transition-all duration-500 delay-300 space-y-6 z-300`}
      >
        {
          NavLinks.map(link=>{
            return(
              <Link key={link.id} href={link.url}>
                <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
              </Link>
            )
          })
        }
        {/* close icon */}
        <CgClose 
          onClick={closeNav}
          className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8' 
        />
      </div>
    </div>
  )
}

export default MobileNav