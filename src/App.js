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
import styled from "styled-components";

const Layout = styled.div``;

//React router changes page based on user selected page

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Layout>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Navbar cart={cart}></Navbar>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/shop"
                element={<Shop cart={cart} setCart={setCart} />}
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default App;
