import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Header from "./components/header/Header";
import HotDishes from "./pages/hotDishes/HotDishes";
import Drink from "./pages/drinks/Drink";
import Salads from "./pages/salads/Salads";
import Seafood from "./pages/seaFood/SeaFood";
import Soups from "./pages/soups/Soups";
import Desert from "./pages/dessert/Desert";
import Basket from "./pages/basket/Basket";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HotDishes />} />
          <Route path="/drinks" element={<Drink />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/seaFood" element={<Seafood />} />
          <Route path="/soups" element={<Soups />} />
          <Route path="/desert" element={<Desert />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
