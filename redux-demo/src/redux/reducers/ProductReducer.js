import { actionTypes } from "../types/types";

const productiState = {
  products: [],
  filteredProduct: [],
};

export const productReducer = (state = productiState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload, // updated state - array
      };
    case actionTypes.SEND_ID:
      let productID = action.payload;
      let x = state.products.filter((item) => item.id === productID);
      return {
        ...state,
        filteredProduct: x, // [{...}] // update
      };
    default:
      return state;
  }
};
