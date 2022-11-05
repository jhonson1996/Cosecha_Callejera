import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Basket } from "./components/Basket/Basket.js";
import Details from "./components/Details/Details";
import FavoritePage from "./components/Favorite/FavoritePage";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Details />} />
          {/* <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/basket' element={<Basket />} />
      <Route path='*' element={<Navigate to={'/'} />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
