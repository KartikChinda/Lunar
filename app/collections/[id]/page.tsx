"use client";
import { useParams } from 'next/navigation'
import React from 'react'
import { watchData } from '@/assets/watchUtil';
import Footer from '@/components/Footer';

const page = () => {

    const params = useParams();
    const watchID = params.id;

    console.log(watchData)

    return (
        <section>
            <div className='h-[86.5vh]'>
                Here goes the main section
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}

export default page