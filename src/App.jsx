import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
