import React from 'react'
import Image from 'next/image';
import { images } from '@/assets';
import { motion } from "framer-motion"

const WatchImage = ({ watchID }: { watchID: string | string[] }) => {
    console.log(watchID);
    return (
        <section className='group'>
            {/* <div className='transition-opacity duration-700 ease-in delay-1000 opacity-0 group-hover:opacity-100'> */}
            <div className='group-hover:animate-fade'>
                <Image src={images[Number(watchID)]} alt='Watch' />
            </div>
        </section>

    )
}

export default WatchImage