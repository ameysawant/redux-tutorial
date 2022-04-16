import { combineReducers } from "redux";
import { productsReducer } from "../reducers/ProductsReducer";

const rootReducer = combineReducers({
  productsReducer,
});

export default rootReducer;
