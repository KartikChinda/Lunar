import React from 'react'
import { watchData } from '@/assets/watchUtil'

const WatchInformation = () => {
    return (
        <section className='w-full h-full grid grid-cols-6 grid-rows-10'>
            <div className=' flex flex-col justify-center items-center border-2 border-palette-lines m-1 col-span-6 row-span-4'>
                <p className=' text-palette-text font-text flex justify-center items-center text-justify lg:px-12'>{watchData.description}</p>
                <p className='mt-2 font-semibold text-md lg:text-[18px] '>
                    {watchData.tagline}
                </p>
                {/* Unprecedented Watchmaking prowess */}
            </div>
            {watchData.features.map((feature) => {
                return (
                    <div className='border-2 border-palette-lines m-1 p-2 row-span-2 text-md flex justify-center items-center text-center px-14 col-span-2'>
                        {feature[1]}
                        {/* {feature[index].} */}
                    </div>
                )
            })}



        </section>
    )
}

export default WatchInformation