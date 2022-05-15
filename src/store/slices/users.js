import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USERS_URL } from "../../Utils/constants";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
}

export const accountUsers = createAsyncThunk('users/accountUsers', async () => {
  const response = await fetch(USERS_URL);

  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Error during get account data');
  }
});


export const editUser = createAsyncThunk('users/editUser', async (updatedUser) => {
  
  console.log(updatedUser);

  const response = await fetch(USERS_URL + updatedUser.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser)
    })

  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Error during edit post');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.posts = action.payload
    }
  },
  extraReducers: ( builder) => {
    builder.addCase(accountUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(accountUsers.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(accountUsers.rejected, (state, action) =>
    {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(editUser.fulfilled, (state, action) => {
      state.list = [...state.list].map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }

        return user;
      });
    });
    builder.addCase(editUser.rejected, (state, action) =>
    {
      state.error = action.payload;
    });
  }
});

export const usersReducer = usersSlice.reducer;

export const { setUsers } = usersSlice.actions;

export const selectUsersData = (state => state.users);