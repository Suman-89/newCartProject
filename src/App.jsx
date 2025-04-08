import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Mycart from "./pages/cart";
import Menu from "./pages/menu";

function App() {
  return (
    <>
      <Index>
        <Router>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/cart" element={<Mycart />} />
          </Routes>
        </Router>
      </Index>
    </>
  );
}

export default App;
