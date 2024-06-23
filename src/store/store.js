import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./feature/userWish/userWish";

export const store = configureStore({
  reducer: {
    wish: wishReducer,
  },
});
