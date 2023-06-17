import { cartReducer } from "./cart";
import { isCartOpen } from "./isCartOpen";
import { productReducer } from "./products";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    isCartOpen : isCartOpen,
    products : productReducer,
    cart : cartReducer
})