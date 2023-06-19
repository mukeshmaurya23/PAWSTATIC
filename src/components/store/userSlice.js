import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "Guest",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
