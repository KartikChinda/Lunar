import React from 'react'
import { CartItem } from '@/interfaces'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { images } from '@/constants/watchImages'
import Image from 'next/image'
import { removeFromCart } from '@/app/store/slices/cartSlice'

const CartProduct = ({ product }: { product: CartItem }) => {
    const notificationRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch();

    const RemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
        if (notificationRef.current) {
            notificationRef.current.textContent = "Removing item..."
        }
    }

    const increaseQuantity = () => {

    }

    const decreaseQuantity = () => {

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
                    <div className='flex justify-center items-center gap-2 '>
                        <button onClick={increaseQuantity} className='text-xl font-black border-2 rounded-full p-2 bg-palette-text text-palette-bg'>+</button>
                        <p className='font-bold text-xl'>{product.quantity}</p>
                        <button onClick={decreaseQuantity} className='text-xl font-black border-2 rounded-xl p-2 bg-palette-text text-palette-bg'>-</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CartProduct