import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Search from "./Search";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const api = process.env.REACT_APP_API_URL;
    const response = await fetch(
      `https://api.json-generator.com/templates/NJojKfMBgNOj/data?access_token=${api}`
    );
    const data = await response.json();
    setProducts(data.products);
    setFilteredProduct(data.products);
  };
  // console.log(products);
  // console.log(filteredProduct);

  const sendID = (id) => {
    let x = products.filter((item) => item.id === id);
    console.log(x);
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
                <h4>{name}</h4>
                <img src={image} alt={name} />
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
