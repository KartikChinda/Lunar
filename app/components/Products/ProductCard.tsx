"use client";
import Image from 'next/image';
import React from 'react';
import { images } from '@/constants/watchImages';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/store/slices/cartSlice';
import { useRef } from 'react';



interface ProductFields {
    id: number,
    name: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {
        range: number;
        count: number;
    }

}

const ProductCard = ({ product }: { product: ProductFields }) => {

    const dispatch = useDispatch();

    const notificationRef = useRef<HTMLDivElement>(null)

    const handleAdditionToCart = () => {
        dispatch(addToCart(product));
        if (notificationRef.current) {
            notificationRef.current.textContent = "Adding item..."
        }
        setTimeout(() => {
            if (notificationRef.current) {
                notificationRef.current.textContent = "Item added!"
            }
        }, 2000);
        setTimeout(() => {
            if (notificationRef.current) {
                notificationRef.current.textContent = "Add to cart"
            }
        }, 3500);
    }



    return (
        <div className='flex flex-col justify-around items-center h-full w-full text-palette-text group'>
            <div className='flex justify-center items-center h-[300px]  w-full'>
                <Image src={images[product.id - 1]} alt={product.name} className='group-hover:scale-[0.7] duration-150 scale-[0.6]' />
            </div>
            <div className='w-full'>
                <div className='flex group-hover:scale-[0.9] duration-150 justify-between px-4 w-full items-center'>
                    <div className='font-headings text-palette-text text-3xl font-black'>
                        {product.name}
                    </div>
                    <div className='font-text font-semibold text-lg'>
                        {product.rating.range} ({product.rating.count})
                    </div>

                </div>
                <div className='group-hover:scale-[0.9] duration-150 flex justify-between px-4 w-full items-center'>
                    <div className='font-headings text-palette-pink text-3xl font-black'>
                        ₹ {product.price}
                    </div>
                    <button onClick={handleAdditionToCart} className='font-text rounded-xl p-2 border-2 bg-palette-text text-palette-bg hover:text-palette-text hover:bg-palette-bg duration-150'>
                        <div ref={notificationRef}>
                            Add to Cart
                        </div>
                    </button>

                </div>
            </div>


        </div>
    )
}

export default ProductCard