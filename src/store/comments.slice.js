import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../services/comment.service";

export const getAllComments = createAsyncThunk(
  'commentsSlice/getAllComments',
  async (_, {rejectWithValue}) => {
    try {
      return await commentService.getAll();
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState: {
    comments: [],
    status: null,
    errors: null
  },
  extraReducers: {
    [getAllComments.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.comments = action.payload
    },
    [getAllComments.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
    }
  }
})

const commentReducer = commentsSlice.reducer;

export default commentReducer;