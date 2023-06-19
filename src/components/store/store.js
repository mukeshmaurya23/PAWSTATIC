import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import appSlice from "./appSlice";
import userSlice from "./userSlice";
const store = configureStore({
  reducer: {
    login: loginSlice,
    app: appSlice,
    user: userSlice,
  },
});

export default store;
