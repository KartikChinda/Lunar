import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center text-3xl font-text text-center gap-6'>
            <div>
                We're working on this.
                <br />
                All we need is a store and some products.
            </div>


            <div >
                <Link href={"/cart"} className='font-text rounded-xl p-2 border-2 bg-palette-text text-palette-bg hover:text-palette-text hover:bg-palette-bg hover:scale-105 duration-150 mt-10'>
                    Go visit cart.
                </Link>
                <Link href={"/"} className='font-text rounded-xl p-2 border-2 bg-palette-text text-palette-bg hover:text-palette-text hover:bg-palette-bg hover:scale-105 duration-150 mt-10'>
                    Go home.
                </Link>
            </div>



        </div>

    )
}

export default page