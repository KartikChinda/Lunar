"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import { watchData } from '@/assets/watchUtil';
import Footer from '@/components/Footer';
import WatchImage from '@/components/WatchImage';

const page = () => {

    const params = useParams();
    const watchID = params.id;

    const watchNumber = Number(watchID) < 9 ? `0${Number(watchID) + 1}` : Number(watchID) + 1;

    console.log(watchID)

    return (
        <section >
            <div className='h-[86.5vh] group flex'>
                {/* animation code here  */}
                <div className='absolute w-[51vw]  h-[86.8vh] transition-all duration-[1800ms] left-0 group-hover:left-[-52%] flex justify-center delay-300 items-center bg-palette-text text-palette-bg'>
                    <p className='relative left-44  2xl:left-72 top-14  text-5xl font-text'>S A E A</p>
                </div>
                <div className='absolute w-[51vw]  h-[86.8vh] transition-all duration-[1800ms] left-[50%] group-hover:left-[100%] flex justify-center items-center delay-300 bg-palette-bg text-palette-text'>
                    <p className=' font-headings text-[350px] -skew-x-6 absolute left-20 animate-fadeNumber'>{watchNumber}</p>
                </div>

                {/* Here is the code for the underlying website */}
                <div className='w-[50vw] flex justify-center items-center'>
                    {/* <WatchInformation /> */}
                    watch info
                </div>
                <div className='w-[50vw] flex justify-center items-center'>
                    {/* watch image */}
                    <WatchImage watchID={watchID} />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}

export default page