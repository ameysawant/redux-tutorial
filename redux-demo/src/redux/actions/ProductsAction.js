import { actionTypes } from "../types/types";

export const getApiData = () => {
  const api = process.env.REACT_APP_API_URL;
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://api.json-generator.com/templates/NJojKfMBgNOj/data?access_token=${api}`
    );
    const data = await response.json();
    dispatch({
      type: actionTypes.SET_PRODUCTS,
      payload: data.products,
    });
  };
};

//fetch products
// export const setProducts = (products) => {
//   return {
//     type: actionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };

//send ID
export const sendID = (productID) => {
  return {
    type: actionTypes.SEND_ID,
    payload: productID,
  };
};
