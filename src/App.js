import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { SingleProduct } from "./pages/shop/singleProduct";
import { AddProduct } from "./pages/shop/addProduct";
import { EditProduct } from "./pages/shop/editProduct";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<SingleProduct/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/edit/:id" element={<EditProduct/>} />

          </Routes>
  
        </Router>
    </div>
  );
}

export default App;
