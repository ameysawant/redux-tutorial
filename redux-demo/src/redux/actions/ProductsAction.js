import { actionTypes } from "../types/types";

//fetch products
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

//send ID
export const sendID = (productID) => {
  return {
    type: actionTypes.SEND_ID,
    payload: productID,
  };
};
