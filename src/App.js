import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
