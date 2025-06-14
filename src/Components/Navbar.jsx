import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Projects"
        },
        {
            id:4,
            text:"Contact"
        }

    ]
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={logo} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>
                    Sachin Devarajan
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
             {/*desktop nav*/}
            <div>
                <ul className='hidden md:flex space-x-8'>
                   {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 cursor-pointer' key={id}> 
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >
                        {text}</Link>
                        </li>
                    ))
                   }
                </ul>
               <div onClick={()=>setMenu(!menu)} className='md:hidden'> 
               {menu?<IoCloseSharp size={24}/>:<IoMenu size={24}/>}</div>
            </div>
        </div>
        {/*mobile nav*/}
        {menu&&(
        <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
            {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}> 
                        <Link 
                        onClick={()=>setMenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >
                        {text}</Link>
                        </li>
                    ))
                   }
            </ul>
        </div>
        )
        }
        
      </div>
    </>
  )
}

export default Navbar
