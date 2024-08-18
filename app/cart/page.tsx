"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Link from 'next/link'

const page = () => {

    const cartProducts = useSelector((state: RootState) => state.cart.items);

    console.log(cartProducts);

    return (
        <div>
            {cartProducts && cartProducts.length > 0 ?
                <div>

                </div>

                :

                <div className='h-screen flex flex-col gap-4 justify-center items-center'>
                    <p className='text-3xl font-text text-palette-text'>Your cart looks empty. I can fix that. </p>
                    <Link href={"/"} className='rounded-xl border-2  border-palette-text p-2 text-palette-bg bg-palette-text hover:scale-110 duration-150 shadow-xl'>
                        Let's get you splurging.
                    </Link>
                </div>

            }
        </div>
    )
}

export default page