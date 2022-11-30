import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Products from "./Products";
import Error from "./Error";
import Singalproduct from "./Singalproduct";
import Cart from "./Cart";
import { GlobalStyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const theme = {
    colors: {
      bg: "#eeeeee",
      footer_bg: "0a1435",
      helper: "red",
      border: "rgba(98,84243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255)0%, rgb(98 189 252)100%",
      shadow:
        "(0 ,0, 0, 0.2) 0px 1px 3px 0px, rgba (27,31,0.15)0px 0px 0px 1px",
      shadowsupport: "rgba(0,0,0,0.16)0px 1px 4px",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/singalproduct/:id"
              element={<Singalproduct />}
            ></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
