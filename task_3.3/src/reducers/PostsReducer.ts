import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IPost } from "../types/postsType";
import { IPostsState } from "../types/redux.types";
import { RootState } from "./store";

export const fetchPosts = createAsyncThunk<
  IPost[],
  undefined,
  { rejectValue: string }
>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue("Failed fetching");
  }
});

export const addfetchPosts = createAsyncThunk<
  IPost,
  IPost,
  { rejectValue: string }
>("posts/addPosts", async (postData, { rejectWithValue }) => {
  try {
    const post: IPost = {
      userId: 1,
      id: 1,
      title: postData.title,
      body: postData.body,
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );
    const data = await response.json();
    return data as IPost;
  } catch (error) {
    return rejectWithValue("Failed fetching");
  }
});

const initialState: IPostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(addfetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addfetchPosts.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  },
});
const isError = (action: AnyAction) => action.type.endsWith("rejected");
export const postsState = (state: RootState) => state.posts;
export default postsSlice.reducer;
