import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <div className="dvHeader">
        <Header />
      </div>

      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default App;
