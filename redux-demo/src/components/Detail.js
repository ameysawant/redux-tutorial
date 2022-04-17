import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeDetailProduct,
  setDetailProducts,
} from "../redux/actions/ProductsAction";

const Detail = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(
    (state) => state.detailReducer.singleProduct
  );
  console.log(singleProduct);

  useEffect(() => {
    getApiData();
    return () => {
      dispatch(removeDetailProduct());
    };
  }, [productID]);

  const getApiData = async () => {
    const api = process.env.REACT_APP_API_URL;
    const response = await fetch(
      `https://api.json-generator.com/templates/NJojKfMBgNOj/data?access_token=${api}`
    );
    const data = await response.json();
    dispatch(setDetailProducts(data.products, productID));
  };

  return singleProduct ? (
    <div>
      <img
        src={singleProduct.image}
        alt={singleProduct.name}
        className="img-fluidd"
      />
      <h4>{singleProduct.name}</h4>
      <p>{singleProduct.price}</p>
    </div>
  ) : (
    "LOADING..........."
  );
};

export default Detail;
