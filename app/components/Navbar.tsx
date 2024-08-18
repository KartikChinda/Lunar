"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { GiMoon } from 'react-icons/gi';

const Navbar = () => {



    const cart = useSelector((state: RootState) => state.cart);

    const numberOfItems = cart ? cart.items.length : 0;



    return (

        <nav className=' flex justify-around items-center font-headings text-2xl md:text-3xl xl:text-4xl bg-palette-text text-palette-bg py-6'>
            <div className='text-palette-bg w-[10%] hidden md:block'>

            </div>
            <div className='w-[80%] flex justify-start md:justify-center items-center font-headings'>
                <h1 className=''>
                    <GiMoon className='inline mr-2' />
                    <Link href="/">Lunar</Link>
                </h1>
            </div>
            <Link href="/cart" className='w-[9%] text-sm md:text-base flex justify-center items-center mr-2'>
                Cart [{numberOfItems}]
                <FaShoppingCart className='inline text-palette-bg ml-1' />
            </Link>
        </nav>
    )
}

export default Navbar