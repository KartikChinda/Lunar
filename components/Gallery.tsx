
import Image from 'next/image'
import React from 'react';

// image imports
import images from '@/assets';


const Gallery = () => {
    return (
        <section>
            <div id='preview-img'>
                <Image src={images[0]} alt='Watch1' />

            </div>


        </section>

    )
}

export default Gallery