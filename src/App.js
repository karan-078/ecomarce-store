import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Product from "./page/Product";
import SingleProduct from "./page/SingleProduct";
import Error from "./page/Error";
import Cart from "./page/Cart";
import './App.css'
import Header from "./camponents/Header";
import Footer from "./camponents/Footer";

const App = () => {


  return (
    <>
      
        <Router>
             <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/singalproduct/:id" element={<SingleProduct />} />
              <Route path="*" element={<Error />} />
            </Routes>
           <Footer/>
        </Router>
     
    </>
  );
};

export default App;
