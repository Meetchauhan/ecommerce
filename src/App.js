import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import Layout from "./components/layout/Layout";
import Product from "./pages/Product";

function App() {
  return (
    <div className="ecommerce">
      <Layout>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product" element={<Product />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
