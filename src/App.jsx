import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Component/productList";
import ProductDetails from "./Component/productDetails";
import Navbar from "./Component/navbar";


function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
