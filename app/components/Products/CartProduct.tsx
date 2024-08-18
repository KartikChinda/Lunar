import React from 'react'
import { ProductFields } from '@/interfaces'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { images } from '@/constants/watchImages'
import Image from 'next/image'

const CartProduct = ({ product }: { product: ProductFields }) => {
    const notificationRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch();

    const RemoveFromCart = () => {
        // dispatch(addToCart(product));
        // if (notificationRef.current) {
        //     notificationRef.current.textContent = "Adding item..."
        // }
        // setTimeout(() => {
        //     if (notificationRef.current) {
        //         notificationRef.current.textContent = "Item added!"
        //     }
        // }, 2000);
        // setTimeout(() => {
        //     if (notificationRef.current) {
        //         notificationRef.current.textContent = "Add to cart"
        //     }
        // }, 3500);
    }



    return (
        <div className='flex justify-around items-center h-full w-full border-2 p-2 border-palette-lines text-palette-text group'>
            <div className='flex justify-center items-center'>
                <Image src={images[product.id - 1]} alt={product.name} width={150} height={150} />
            </div>
            <div className='w-full'>
                <div className='flex duration-150 justify-between px-4 w-full items-center'>
                    <div className='font-headings text-palette-text text-3xl font-black'>
                        {product.name}
                    </div>
                    <div className='font-headings text-palette-pink text-3xl font-black'>
                        ₹ {product.price}
                    </div>


                </div>
                <div className=' duration-150 flex justify-between px-4 w-full items-center'>

                    <button onClick={RemoveFromCart} className='font-text rounded-xl p-2 border-2 bg-palette-text text-palette-bg hover:text-palette-text hover:bg-palette-bg hover:scale-90 duration-150'>
                        <div ref={notificationRef}>
                            Remove from Cart
                        </div>
                    </button>

                </div>
            </div>


        </div>
    )
}

export default CartProduct