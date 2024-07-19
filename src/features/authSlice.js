import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
  userData: null,
};

// we will store userdata after login and also maintain a status (authStatus) so that we can know that whether user is logged in or logged out. This will help us in managing protected routes.

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("chala store");
      state.authStatus = true;
      state.userData = action.payload;
    },
    logout: (state, action) => {
      state.authStatus = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
