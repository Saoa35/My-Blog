import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
  const { data } = await axios.get("auth/login", params);
  return data;
});

const initialState = {
  data: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAuth.pending]: (state) => {
      state.data = null;
      state.status = "error";
    },
  },
});

export const authReducer = authSlice.reducer;
