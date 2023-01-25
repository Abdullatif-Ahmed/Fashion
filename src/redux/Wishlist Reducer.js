import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { textEllipse } from "../textEllipse";
const WishList = createSlice({
  name: "whish list",
  initialState: {
    items: localStorage.getItem("whishList")
      ? JSON.parse(localStorage.getItem("whishList"))
      : [],
    quantity: localStorage.getItem("whishList")
      ? JSON.parse(localStorage.getItem("whishList")).length
      : 0,
  },
  reducers: {
    addTOWishList: (state, action) => {
      let ex = state.items.some((el) => el.id === action.payload.id);
      if (ex) {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
        state.quantity--;
      } else {
        state.items.push(action.payload);
        state.quantity++;
        toast.success(
          `${textEllipse(
            action.payload.name,
            7
          )} has been added to your wishlist`,
          {
            position: "top-left",
          }
        );
      }

      localStorage.setItem("whishList", JSON.stringify(state.items));
    },
    removeFromWhishList: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
      state.quantity--;
      localStorage.setItem("whishList", JSON.stringify(state.items));
    },
  },
});
export const { addTOWishList, removeFromWhishList } = WishList.actions;
export default WishList.reducer;
