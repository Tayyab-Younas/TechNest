import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState ={

    products:  [
        {
            id: Date.now() , name : "CHECKERED SHIRT", price : "$50" , Image : "https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: Date.now() , name : "SHIRT", price : "$50" , Image : "https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        {
            id: Date.now() , name : "SHIRT", price : "$50" , Image : "https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: Date.now() , name : "SHIRT", price : "$50" , Image : "https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: Date.now() , name : "SHIRT", price : "$50" , Image : "https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

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