import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services/post.service";

export const getAllPosts = createAsyncThunk(
  'postsSlice/getAllPosts',
  async (_, {rejectWithValue}) => {
    try {
      return await postService.getAll()
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState: {
    posts: [],
    status: null,
    error: null
  },
  extraReducers: {
    [getAllPosts.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.posts = action.payload
    },
    [getAllPosts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

const postReducer = postsSlice.reducer;

export default postReducer;