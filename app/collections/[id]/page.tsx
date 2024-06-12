"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import { watchData } from '@/assets/watchUtil';
import Footer from '@/components/Footer';

const page = () => {

    const params = useParams();
    const watchID = params.id;

    console.log(watchID)

    return (
        <section >
            <div className='h-[86.5vh] group'>

                <div className='absolute w-[51vw]  h-[86.8vh] transition-all duration-[1800ms] left-0 group-hover:left-[-52%] flex justify-center delay-300 items-center bg-palette-text text-palette-bg'>
                    <p className='relative left-24 lg:left-72 top-14  text-5xl font-text'>S A E A</p>
                </div>
                <div className='absolute w-[51vw]  h-[86.8vh] transition-all duration-[1800ms] left-[50%] group-hover:left-[100%] flex justify-center items-center delay-300 bg-palette-bg text-palette-text'>
                    <p className=' font-headings text-[350px] -skew-x-6 absolute left-20'>{`0${Number(watchID) + 1}`}</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}

export default page