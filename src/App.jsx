import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Component/productList";
import ProductDetails from "./Component/productDetails";
import Navbar from "./Component/navbar";
import Cart from "./Component/cart";
import Headphone from "./pages/Headphone";
import Airpods from "./pages/Airpods";
import Watches from "./pages/Watches";
import Chargers from "./pages/Chargers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Headphone" element={<Headphone />} />
        <Route path="/Airpods" element={<Airpods />}></Route>
        <Route path="/Watches" element={<Watches />}></Route>
        <Route path="/Chargers" element={<Chargers/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
