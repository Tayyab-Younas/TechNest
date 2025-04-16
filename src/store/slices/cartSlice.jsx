import { createSlice } from "@reduxjs/toolkit";

// Initial state of the cart
const initialState = {
  cartItems: [], // Array to hold all items in the cart
};

const cartSlice = createSlice({
  name: "cart", // Slice name
  initialState, // Initial state of the cart
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      // If the item is already in the cart, increase its quantity
      if (product) {
        product.quantity += 1;
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      // Remove the item based on its id
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // Action to increase the quantity of an item
    increaseItemQuantity: (state, action) => {
      // Find the item in the cart
      const item = state.cartItems.find((item) => item.id === action.payload);
      
      // If the item exists, increase its quantity
      if (item) {
        item.quantity += 1;
      }
    },

    // Action to decrease the quantity of an item (minimum quantity 1)
    decreaseItemQuantity: (state, action) => {
      // Find the item in the cart
      const item = state.cartItems.find((item) => item.id === action.payload);

      // If the item exists and the quantity is greater than 1, decrease the quantity
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

// Export the actions to be used in components
export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
