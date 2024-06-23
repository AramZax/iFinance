import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "1",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLange: (state, { payload }) => {
      state.lang = payload.lang;
    },
  },
});

export const { changeLange } = langSlice.actions;
export default langSlice.reducer;
