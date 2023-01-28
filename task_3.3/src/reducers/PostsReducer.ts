import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostsState } from "../types/redux.types";
import { RootState } from "./store";

export const fetchPosts: any = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await response.json();
    return data;
  }
);

const initialState: IPostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts.push({
        userId: 1,
        id: 1,
        title: action.payload.title,
        body: action.payload.body
      })
    },
    editPosts: () => {},
    deletePosts: () => {},
  },
extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
    })
},
  
});
export const {addPosts} = postsSlice.actions
export const postsState = (state: RootState) => state.posts;
export default postsSlice.reducer;
