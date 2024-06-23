import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wish: [],
};

export const wishSlice = createSlice({
  name: "userWish",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const { id, title, img, price } = payload;
      const existingItem = state?.wish.find((item) => item.id === id);
      if (existingItem) {
        toast("Առկա է");
      } else {
        const newBasket = [...state.wish, { id, title, img, price }];
        state.wish = newBasket;
        toast("Հիանալի");
      }
    },
  },
});

export const { increment } = wishSlice.actions;

export default wishSlice.reducer;
