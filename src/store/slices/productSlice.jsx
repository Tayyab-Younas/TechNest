import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  products: [
    {
      id: uuidv4(),
      name: "JBL Headphone",
      price: "100",
      category: "Headphone",
      description:
        "  Enjoy immersive, high-quality sound with JBL’s wireless headphones featuring Active Noise Cancellation (ANC) for a distraction-free experience. Designed for comfort and durability, they offer seamless Bluetooth connectivity, deep bass, and long battery life for all-day listening. Perfect for music, calls, and travel. Experience premium sound with JBL!",
      Image:
        "https://i.pinimg.com/736x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
    },
    {
      id: uuidv4(),
      name: "Apple Air Pods (2nd generation) pro",
      price: "50",
      category: "Airpods",
      description:
        "  Experience clear sound, deep bass, and seamless Bluetooth connectivity. With touch controls and a compact charging case, enjoy all-day comfort and extended battery life—perfect for music, calls, and travel. 🎧",
      Image:
        "https://i.pinimg.com/736x/eb/79/04/eb7904f9b7407e8710c592ba4591a0ec.jpg",
    },
    {
      id: uuidv4(),
      name: "UGREEN Quick Charge 4.0",
      price: "40",
      category: "charger",
      description:
        "  Charge your devices faster with the UGREEN 30W Fast Charger, featuring Power Delivery 3.0 and Quick Charge 4.0 for rapid and efficient charging. Compatible with smartphones, tablets, and other USB-C devices, this charger ensures safe and reliable performance with built-in protection against overheating and overcharging.",
      Image:
        "https://i.pinimg.com/736x/70/36/c4/7036c44216a905fdbe9d7e437a8936af.jpg",
    },
    {
      id: uuidv4(),
      name: "Apple Watch Series 3",
      price: "150",
      category: "Watch",
      description:
        "Stay connected and active with the Apple Watch Series 3, featuring built-in GPS, fitness tracking, heart rate monitoring, and water resistance. Receive calls, messages, and notifications directly on your wrist while tracking your workouts with precision.",
      Image:
        "https://i.pinimg.com/736x/3c/01/dd/3c01dd03190a634ee3daa182db722cb7.jpg",
    },
    {
      id: uuidv4(),
      name: "Apple AirPods Max",
      price: "450",
      category: "Airpods",
      description:
        "Immerse yourself in rich, high-fidelity audio with the Apple AirPods Max. Designed for premium comfort, these headphones feature Active Noise Cancellation, Spatial Audio, and Adaptive EQ for an unparalleled listening experience.",
      Image:
        "https://i.pinimg.com/736x/20/7f/72/207f72b46ad8b45a62198e1514f6b5a8.jpg",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
