import { createSlice, nanoid } from "@reduxjs/toolkit";
import { reactHooksModuleName } from "@reduxjs/toolkit/query/react";

const initialState ={

    product:  [
        {},
        {},
        
    ]
};

const productSlice = createSlice({
    name:"products",    
    initialState,
    reducers:{},

});

export default productSlice.reducer;