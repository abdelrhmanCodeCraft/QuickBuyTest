
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, 
  user: null, 
  token: null, 
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user; 
      state.token = action.payload.token;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
