import React from 'react'

const Hero = () => {
    return (
        <div className='h-[40vh] flex flex-col gap-4 '>
            {/* sale section */}
            <div className='flex justify-around  items-center p-4 '>
                <div className='text-8xl md:text-[190px] font-black font-text text-palette-pink'>
                    SALE
                </div>
                <div className='text-xs md:text-2xl text-right font-black  font-text text-palette-text'>
                    Because You love the products, <br /> and we love you.
                </div>
            </div>
            <div className='w-full h-[25%] bg-palette-text font-text flex justify-center items-center'>
                <p className='text-[40px] md:text-5xl font-black text-palette-bg'>
                    15% OFF SITEWIDE
                </p>
            </div>
            <div className='w-full  bg-palette-text font-text flex justify-center items-center group'>
                <p className='text-xl p-2 font-bold text-palette-bg text-center'>
                    Use Coupon <span className='font-black text-[28px] px-2 group-hover:text-palette-pink group-hover:text-4xl duration-150'>OPTIONALCREDIT</span> at checkout.
                </p>
            </div>
        </div>
    )
}

export default Hero