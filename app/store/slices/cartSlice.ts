
import { createSlice } from "@reduxjs/toolkit";

import { CartState } from "@/interfaces";



const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }

            // console.log('Updated cart state:', JSON.stringify(state, null, 2));
        }
    }

})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer; 