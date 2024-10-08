"use client";
import { createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "@/interfaces";

const loadCartIfInLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    }

    return [];


};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
};

const initialState: CartState = {
    items: loadCartIfInLocalStorage(),
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
            if (typeof window !== 'undefined') {

                saveCartToLocalStorage(state.items);
            }

            // console.log('Updated cart state:', JSON.stringify(state, null, 2));
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
            if (typeof window !== 'undefined') {

                saveCartToLocalStorage(state.items);
            }
        },

        increaseItemQuantity(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items[itemIndex].quantity += 1;
            if (typeof window !== 'undefined') {

                saveCartToLocalStorage(state.items);
            }
        },
        decreaseItemQuantity(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items[itemIndex].quantity -= 1;
            if (typeof window !== 'undefined') {

                saveCartToLocalStorage(state.items);
            }
        }
    }

})

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer; 