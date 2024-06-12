import Link from 'next/link'
import React from 'react'
import { GiMoon } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        // <nav className='w-full flex justify-between items-center h-14'>
        //     <Link href="/">
        //         <h1 className='text-2xl md:text-5xl xl:text-6xl font-headings text-palette-text  absolute top-2 left-[50%] translate-x-[-108%] hidden md:inline font-semibold'>
        //             <GiMoon className='inline text-4xl  mr-3 ' />
        //             L U

        //         </h1>
        //         <h1 className=' text-2xl md:text-5xl xl:text-6xl font-headings text-palette-bg absolute top-2 left-[50%] translate-x-[8%] hidden md:inline'>

        //             N A R

        //         </h1>
        //         <div className='md:hidden text-4xl py-2 font-headings '>
        //             <GiMoon className='inline text-4xl  mr-2 ' />
        //             L U N A R
        //             {/* <div className='inline text-lg text-palette-text font-light font-headings'>
        //                 Cart
        //                 <FaShoppingCart className='inline ml-2' />
        //             </div> */}
        //         </div>

        //     </Link>
        //     <div className='my-auto mr-2 text-lg text-palette-bg font-light font-headings'>
        //         Cart
        //         <FaShoppingCart className='inline ml-2' />
        //     </div>
        // </nav>
        <nav className=' flex justify-around items-center font-headings text-2xl md:text-3xl xl:text-4xl py-4 bg-palette-bg'>
            <div className='text-palette-bg w-[10%]'>

            </div>
            <div className='w-[80%] flex justify-center items-center '>
                <h1 className=''>
                    <GiMoon className='inline mr-2' />
                    <Link href="/">L U N A R</Link>
                </h1>
            </div>
            <Link href="/cart" className='w-[9%] text-sm md:text-base flex justify-end items-center mr-2'>
                Cart
                <FaShoppingCart className='inline text-palette-text ml-1' />
            </Link>
        </nav>
    )
}

export default Navbar