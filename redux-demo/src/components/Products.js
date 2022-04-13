import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Search from "./Search";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [filteredProduct, setFilteredProduct] = useState([]);
  console.log(filteredProduct);
  useEffect(() => {
    getApiData();
  }, []);
  console.log("component rendered");
  const getApiData = async () => {
    const API_URL =
      "https://api.json-generator.com/templates/NJojKfMBgNOj/data?access_token=5e34zn7yhf9i7cfu89lda4qasoelrlo37ooywpw3";
    const response = await fetch(API_URL);
    const data = await response.json();
    setProducts(data.products);
    setFilteredProduct(data.products);
  };

  const sendID = (id) => {
    let x = products.filter((item) => item.id === id);
    setFilteredProduct(x);
  };
  return (
    <>
      <div style={{ float: "left", width: "100%" }}>
        <Search />
      </div>

      <div style={{ float: "left", width: "25%" }}>
        <Filter sendID={(id) => sendID(id)} products={products} />
      </div>

      <div style={{ float: "left", width: "50%" }}>
        {filteredProduct &&
          filteredProduct.map((product) => {
            const { id, name, image, price } = product;
            return (
              <div key={id}>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{price}</p>
              </div>
            );
          })}
      </div>

      <div style={{ float: "left", width: "25%" }}>
        <Cart />
      </div>
    </>
  );
};

export default Products;
