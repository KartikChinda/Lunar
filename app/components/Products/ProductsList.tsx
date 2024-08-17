"use client";
import React, { useEffect, useState } from 'react'


const ProductsList = () => {

    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(true);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setloading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                console.log(data);
                setposts(data);
                setloading(false);

            } catch (error) {
                console.log("Error in fetching products", error);
            }

        };

        fetchProducts();

    }, [])



    return (
        <div>ProductsList</div>
    )
}

export default ProductsList