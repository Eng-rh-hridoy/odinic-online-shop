import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Page404 from "./Components/Page404/Page404";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product/:productKey" element={<ProductDetails />} />

          <Route path="*" element={<Page404 />} />
           
        </Routes>
      </Router>
    </div>
  );
}

export default App;
