import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Link from 'next/link'


const Summary = () => {

    const [price, setprice] = useState(0)
    const [totalPrice, settotalPrice] = useState(price)
    const [discountCode, setdiscountCode] = useState("");
    const [isDiscountApplied, setisDiscountApplied] = useState(false)
    const cartProducts = useSelector((state: RootState) => state.cart.items);

    const discountref = useRef<HTMLDivElement>(null);

    const calculatePrice = () => {
        let currentPrice = 0;
        cartProducts.map((currentProduct) => {
            currentPrice += parseInt(currentProduct.price) * currentProduct.quantity;
        })
        setprice(currentPrice);
        isDiscountApplied ? settotalPrice(currentPrice * 0.85) : settotalPrice(currentPrice);
    }

    useEffect(() => {
        calculatePrice();
        // settotalPrice(price);
    }, [cartProducts, isDiscountApplied]);


    const applyDiscount = () => {
        if (discountref.current) {
            discountref.current.textContent = "Applying code..."
        }
        if (discountCode.toLowerCase() === "optionalcredit") {

            setTimeout(() => {
                if (discountref.current) {
                    discountref.current.textContent = "Code applied!"
                }
                setisDiscountApplied(true);
            }, 1500);


        } else {

            setTimeout(() => {
                if (discountref.current) {
                    discountref.current.textContent = "Invalid code. Please try again."
                }
            }, 1500);
        }
    }


    return (
        <div className='p-2 border-2 border-palette-lines w-full flex flex-col justify-center items-center gap-4 py-4 font-text'>
            <h1 className='text-5xl font-black font-headings text-palette-text '>
                Cart Summary
            </h1>
            <div className='w-[90%] flex justify-between items-center '>
                <p>
                    Cart Subtotal:
                </p>
                <p>
                    ₹ {price}
                </p>
            </div>
            <div className=' w-[90%] flex justify-between items-center'>
                <p>
                    Discount code:
                </p>
                <input placeholder='Enter coupon code.' className=' bg-palette-text text-palette-bg' onChange={(e) => {
                    setdiscountCode(e.target.value);
                }}>
                </input>
            </div>
            <div className='w-[90%] flex justify-end'>
                <button onClick={applyDiscount} className='font-text rounded-xl p-2 border-2 bg-palette-text text-palette-bg hover:text-palette-text hover:bg-palette-bg hover:scale-90 duration-150'>
                    <div ref={discountref}>
                        Apply code
                    </div>
                </button>
            </div>
            <div className='w-[90%] flex justify-between items-center '>
                <p>
                    Cart Total (after discount):
                </p>
                <p>
                    ₹ {totalPrice}
                </p>
            </div>

            <div className='w-[90%] flex justify-center'>

                <Link className='font-text rounded-xl w-full p-2 border-2 bg-palette-bg text-palette-text hover:text-palette-bg hover:bg-palette-text hover:scale-105 duration-150 mt-10 text-center' href={"/checkout"}>
                    Proceed to checkout
                </Link>



            </div>
        </div >


    )
}

export default Summary