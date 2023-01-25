import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart Reducer";
import WishList from "./Wishlist Reducer";

const store = configureStore({
  reducer: {
    CartReducer,
    WishList,
  },
});
export default store;
