import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services/user.service";

export const getAllUsers = createAsyncThunk(
  'usersSlice/getAllUsers',
  async (_, {rejectWithValue}) => {
    try {
      return await userService.getAll();
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: {
    users: [],
    status: null,
    error: null
  },
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.users = action.payload
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.payload
    }
  }
})

const userReducer = usersSlice.reducer;

export default userReducer;