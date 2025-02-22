import { createSlice } from "@reduxjs/toolkit";

const initialState={

    cartItems:[],

};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers :{
        addToCart : ( state , action ) => {
            const product = state.cartItems.find( item => item.id === action.payload.id);
            
            if (product) {
                product.quantity += 1;
            } else {
                state.cartItems.push({...action.payload , quantity : 1})
            }
        },

        removeFromCart : ( state , action) =>{
  
            state.cartItems.filter( item => item.id !== action.payload );
        }, 
    },


});

export const { addToCart , removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

