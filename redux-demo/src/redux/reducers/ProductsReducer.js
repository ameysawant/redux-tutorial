import { actionTypes } from "../types/types";

const initialState = {
  products: [],
  filteredProduct: [],
};

const detailiState = {
  detailProducts: [],
  singleProduct: {},
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

export const detailReducer = (state = detailiState, action) => {
  // console.log("aaa", action.productID);
  switch (action.type) {
    case actionTypes.SET_DETAIL_PRODUCTS:
      let productID = action.productID;
      let x = action.payload.find((item) => item.id === parseInt(productID));
      return {
        ...state,
        detailProducts: action.payload, //products
        singleProduct: x,
      };
    case actionTypes.REMOVE_DETAIL_PRODUCT:
      return {};
    default:
      return state;
  }
};
