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

//detail action
export const setDetailProducts = (products, productID) => {
  return {
    type: actionTypes.SET_DETAIL_PRODUCTS,
    payload: products,
    productID: productID,
  };
};

//remove detail action
export const removeDetailProduct = () => {
  return {
    type: actionTypes.REMOVE_DETAIL_PRODUCT,
  };
};
