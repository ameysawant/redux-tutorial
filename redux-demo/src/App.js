import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

const App = () => {
  return (
    <>
      <div className="dvHeader">
        <Header />
      </div>

      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/detail/:productID" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
