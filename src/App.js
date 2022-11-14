import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Footer from "./components/Footer";
import Checkout from "./components/checkout/Checkout";

//React router changes page based on user selected page

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar cart={cart}></Navbar>
          <Routes>
            <Route path="/shopping-cart" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop cart={cart} setCart={setCart} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} setCart={setCart} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
