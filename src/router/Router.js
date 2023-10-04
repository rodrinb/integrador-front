import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import AboutUs from "../screens/AboutUs/AboutUs";
import Products from "../screens/Products/Products";


export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </Router>
  );
}
