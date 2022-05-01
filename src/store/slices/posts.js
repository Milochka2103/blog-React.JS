import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POSTS_URL } from "../../Utils/constants";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(POSTS_URL);
  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Error during get posts');
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  const response = await fetch(POSTS_URL + postId, {method: 'DELETE'});
  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Error during delete post');
  }
});

export const likePost = createAsyncThunk('posts/likePost', async (posts, index) => {

  const updatedPosts = { ...posts };

  updatedPosts[index].liked = !updatedPosts[index].liked;

  const response = await fetch(POSTS_URL + updatedPosts[index].id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPosts[index])
    })

  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Error during delete post');
  }
});


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  },
  extraReducers: ( builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) =>
    {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.list = state.list.filter((post) => post.id !== action.payload.id);
    });
    builder.addCase(deletePost.rejected, (state, action) =>
    {
      state.error = action.payload;
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.list = state.list.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }

        return post;
      });
    });
    builder.addCase(likePost.rejected, (state, action) =>
    {
      state.error = action.payload;
    });
  }
});

export const postsReducer = postsSlice.reducer;

export const { setPosts } = postsSlice.actions;

export const selectPostsData = (state => state.posts);