import { actionTypes } from "../types/types";

//set products action
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

//sendID action
export const sendID = (productID) => {
  return {
    type: actionTypes.SEND_ID,
    payload: productID,
  };
};
