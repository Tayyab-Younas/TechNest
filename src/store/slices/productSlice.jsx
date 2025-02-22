import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={

    products:  [
        {
            id: nanoid() , name : "CHECKERED SHIRT", price : "$50" , Image : "../assets/clothes-data/T-shirt.png"},
            
        {
            
        },
        
    ]
};

const productSlice = createSlice({
    name:"products",    
    initialState,
    reducers:{
        addProduct : ( state , action ) =>{
            
            state.products.push(action.payload); 
        },

        removeProduct : ( state , action) => {

            state.products = state.products.filter( (products) => products.id !== action.payload );

        },

    },

});


export const { addProduct , removeProduct } = productSlice.actions;
export default productSlice.reducer;