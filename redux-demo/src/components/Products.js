import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../redux/actions/ProductsAction";
import Filter from "./Filter";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const filteredProduct = useSelector(
    (state) => state.productsReducer.filteredProduct
  );

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const api = process.env.REACT_APP_API_URL;
    const response = await fetch(
      `https://api.json-generator.com/templates/NJojKfMBgNOj/data?access_token=${api}`
    );
    const data = await response.json();
    dispatch(setProducts(data.products));
  };

  return (
    <>
      <div className="dvFilter">
        <Filter />
      </div>

      <div className="dvProducts">
        {filteredProduct.length === 0
          ? products.map((product) => {
              const { id, name, image, price } = product;
              return (
                <div key={id} className="column">
                  <Link to={`/detail/${id}`}>
                    <img src={image} alt={name} className="img-fluid" />
                  </Link>
                  <h4>{name}</h4>
                  <p>Rs.{price}</p>
                </div>
              );
            })
          : filteredProduct.map((product) => {
              const { id, name, image, price } = product;
              return (
                <div key={id} className="column">
                  <img src={image} alt={name} className="img-fluid" />
                  <h4>{name}</h4>
                  <p>Rs.{price}</p>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Products;
