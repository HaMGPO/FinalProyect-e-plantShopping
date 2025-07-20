import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const { name, cost, image } = action.payload
        const alreadyAdded = state.items.find(item => item.name == name);

        if (alreadyAdded) {
            alreadyAdded.quantity++;
        } else {
            state.items.push({
                name,
                image,
                cost,
                quantity: 1 
            });
        }
    },
    removeItem: (state, action) => { //Removes by name
        const index = action.payload;
        state.items = state.items.filter(item => item.name != index);
    },
    updateQuantity: (state, action) => {
        const {name, newAmount} = action.payload
        const toIncreaseItem = state.items.find(item => item.name == name);
        if (toIncreaseItem) {
            toIncreaseItem.quantity = newAmount
        }

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
