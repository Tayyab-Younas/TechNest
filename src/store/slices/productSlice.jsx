import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const initialState ={

    products:  [
        {
            id: uuidv4() , name : "CHECKERED SHIRT", price : "50", category:"man" , description :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ratione! Libero dolorum laboriosam officiis. Maxime consectetur obcaecati vero aut. Ex fuga blanditiis sequi earum? Corrupti rem possimus officia repellat dolores."  , Image : "https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: uuidv4() , name : "SHIRT", price : "50" , category:"man" ,description :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ratione! Libero dolorum laboriosam officiis. Maxime consectetur obcaecati vero aut. Ex fuga blanditiis sequi earum? Corrupti rem possimus officia repellat dolores." , Image : "https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        {
            id: uuidv4() , name : "SHIRT", price : "50", category:"woman" ,description :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ratione! Libero dolorum laboriosam officiis. Maxime consectetur obcaecati vero aut. Ex fuga blanditiis sequi earum? Corrupti rem possimus officia repellat dolores." , Image : "https://plus.unsplash.com/premium_photo-1740023685108-a12c27170d51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: uuidv4() , name : "SHIRT", price : "50", category:"woman", description :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ratione! Libero dolorum laboriosam officiis. Maxime consectetur obcaecati vero aut. Ex fuga blanditiis sequi earum? Corrupti rem possimus officia repellat dolores." , Image : "https://images.unsplash.com/photo-1740417643401-94dcd72ca0fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        {
            id: uuidv4() , name : "SHIRT", price : "50", category:"kid" ,description :"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ratione! Libero dolorum laboriosam officiis. Maxime consectetur obcaecati vero aut. Ex fuga blanditiis sequi earum? Corrupti rem possimus officia repellat dolores." , Image : "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        },
        
    ]
};

const productSlice = createSlice({
    name:"products",    
    initialState,
    reducers:{
   

    },

});


export default productSlice.reducer;