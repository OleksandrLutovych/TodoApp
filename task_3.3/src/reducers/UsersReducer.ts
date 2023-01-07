import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUsersState } from "../types/redux.types";
import { RootState } from "./store";

const initialState: IUsersState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users=  action.payload
    });
  },
});

export const usersState = (state: RootState) => state.users
export default usersSlice.reducer
