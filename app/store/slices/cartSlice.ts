
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
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        increaseItemQuantity(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items[itemIndex].quantity += 1;
        },
        decreaseItemQuantity(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items[itemIndex].quantity -= 1;
        }
    }

})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer; 