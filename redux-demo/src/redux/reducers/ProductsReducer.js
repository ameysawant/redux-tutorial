import { actionTypes } from "../types/types";

const initialState = {
  products: [],
  filteredProduct: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload, //products
      };
    case actionTypes.SEND_ID:
      let x = state.products.filter((item) => item.id === action.payload); //productID
      return {
        ...state,
        filteredProduct: x,
      };
    default:
      return state;
  }
};
