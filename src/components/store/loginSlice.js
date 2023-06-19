import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLoginHandler: (state, action) => {
      state.isLoggedIn = true;
    },
    userLogoutHandler: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { userLoginHandler, userLogoutHandler } = loginSlice.actions;

export default loginSlice.reducer;
