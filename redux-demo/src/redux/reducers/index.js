import { combineReducers } from "redux";
import { productsReducer } from "../reducers/ProductsReducer";
import { detailReducer } from "../reducers/ProductsReducer";

const rootReducer = combineReducers({
  productsReducer,
  detailReducer,
});

export default rootReducer;
