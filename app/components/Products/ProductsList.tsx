"use client";
import React, { useEffect, useState } from 'react'
import { DotLoader } from 'react-spinners';
import ProductCard from './ProductCard';
import watchData from '../../../constants/watchData.json'


const ProductsList = () => {

    const [products, setproducts] = useState<any[]>([]);
    const [loading, setloading] = useState(true);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setloading(true);
                // const response = await fetch("https://fakestoreapi.com/products");
                // let data = await response.json();

                // console.log(data);
                // setproducts(data.splice(0, 12));
                setproducts(watchData);
                setloading(false);

            } catch (error) {
                console.log("Error in fetching products", error);
            }

        };

        fetchProducts();

    }, [])



    return (
        <div>

            {loading ?
                <div className='w-full h-[90vh] flex justify-center items-center'>
                    <DotLoader color='#fe019a' />
                </div>
                : ""}

            {products && products.length > 0 ?

                <div className='flex flex-wrap'>
                    {products.map((product) => {
                        return (
                            <div className='h-[50vh] w-[100%] md:w-[50%] lg:w-[33.3%] flex justify-center items-center border-[1.3px] border-palette-lines'>
                                <ProductCard product={product} />
                            </div>
                        )
                    })}
                </div>

                :

                <div className='w-full h-[90vh] flex justify-center items-center p-4 text-center text-palette-text text-2xl font-text'>
                    If you're not seeing anything here, we're either bankrupt, or we're having a party because we sold everything out.
                </div>

            }

        </div>
    )
}

export default ProductsList