import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Categorypage, Gensil, Checkout } from "../pages/Pages";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Categorypage" element={<Categorypage />} />
      <Route path="Gensil" element={<Gensil />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
};

export default Routing;
