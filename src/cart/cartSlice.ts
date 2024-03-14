import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "./types";

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const index = state.findIndex(item => item.product.id === action.payload.product.id);
            if ( index >= 0 ) state[ index ] = { product: action.payload.product, count: action.payload.count };
            else state.push({ product: action.payload.product, count: action.payload.count });
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(item => item.product.id === action.payload);
            state.splice(index, 1);
        }
    },
    selectors: {
        selectCart: (state) => state
    }
})

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions

export const {
    selectCart
} = cartSlice.selectors
