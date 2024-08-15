import Link from 'next/link'
import React from 'react'

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (

        <nav className=' flex justify-around items-center font-headings text-2xl md:text-3xl xl:text-4xl bg-palette-text text-palette-bg py-6'>
            <div className='text-palette-bg w-[10%] hidden md:block'>

            </div>
            <div className='w-[80%] flex justify-start md:justify-center items-center '>
                <h1 className=''>
                    <Link href="/">We Sell It All</Link>
                </h1>
            </div>
            <Link href="/cart" className='w-[9%] text-sm md:text-base flex justify-center items-center mr-2'>
                Cart
                <FaShoppingCart className='inline text-palette-bg ml-1' />
            </Link>
        </nav>
    )
}

export default Navbar