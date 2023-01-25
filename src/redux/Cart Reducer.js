import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { textEllipse } from "../textEllipse";
const CartReducer = createSlice({
  name: "cart reducer",
  initialState: {
    products: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    totalPrice: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")).reduce(
          (acc, cur) => acc + cur.price.current.value * cur.itemQuantity,
          0
        )
      : 0,
    quantity: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")).length
      : 0,
  },
  reducers: {
    add_product: (state, action) => {
      state.products.push({
        ...action.payload.item,
      });
      state.quantity++;

      state.totalPrice = state.products.reduce(
        (acc, cur) => acc + cur.price.current.value * cur.itemQuantity,
        0
      );
      localStorage.setItem("cartItems", JSON.stringify(state.products));
      toast.success(
        `${textEllipse(
          action.payload.item.name,
          7
        )} has been added to your cart`,
        {
          position: "top-left",
        }
      );
    },
    delete_product: (state, action) => {
      state.products = state.products.filter((el) => el.id !== action.payload);
      state.quantity--;
      state.totalPrice = state.products.reduce(
        (acc, cur) => acc + cur.price.current.value * cur.itemQuantity,
        0
      );
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    increment: (state, action) => {
      state.products.forEach((el) => {
        el.id === action.payload && el.itemQuantity++;
      });
      state.totalPrice = state.products.reduce(
        (acc, cur) => acc + cur.price.current.value * cur.itemQuantity,
        0
      );
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
    decrement: (state, action) => {
      state.products.forEach((el) => {
        if (el.id === action.payload) {
          if (el.itemQuantity > 1) {
            el.itemQuantity--;
          } else {
            state.products = state.products.filter((li) => li.id !== el.id);
            state.quantity--;
          }
        }
      });
      state.totalPrice = state.products.reduce(
        (acc, cur) => acc + cur.price.current.value * cur.itemQuantity,
        0
      );
      localStorage.setItem("cartItems", JSON.stringify(state.products));
    },
  },
});

export const { add_product, delete_product, increment, decrement } =
  CartReducer.actions;
export default CartReducer.reducer;
