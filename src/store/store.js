import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./feature/userWish/userWish";
import langReducer from "./feature/language/language";

export const store = configureStore({
  reducer: {
    wish: wishReducer,
    lang: langReducer,
  },
});
