"use client";
import Image from 'next/image'
import React from 'react';

// image imports
import { images } from '@/assets';
import "./gallery.css"
import Link from 'next/link';

const Gallery = () => {

    const arr = [...Array(100)];

    return (
        <section className='w-[100vh] h-[90vh]'>
            <div id='preview'>
                <Image src={images[9]} alt='alt' />
            </div>
            <div id="galleryContainer">
                <div id="gallery">
                    <div>
                        {arr.map((_, index) => {
                            return (
                                <Link href={`/collections/${index % 10}`}>
                                    <Image key={index} id='item' className='item' src={images[index % 10]} alt='alt' />
                                </Link>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Gallery