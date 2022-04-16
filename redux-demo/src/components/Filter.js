import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendID } from "../redux/actions/ProductsAction";

const Filter = () => {
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {products &&
          products.map((product) => {
            const { id, name } = product;
            return (
              <li key={id} onClick={() => dispatch(sendID(id))}>
                {name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Filter;
