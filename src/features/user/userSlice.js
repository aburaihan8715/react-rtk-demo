import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialUserState = {
  users: [],
  userLoading: false,
  userError: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userLoading = false;
      state.users = action.payload;
      state.userError = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.userLoading = false;
      state.users = [];
      state.userError = action.error.message;
    });
  },
});

export default userSlice.reducer;
