import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USERS_URL } from "../../Utils/constants";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(USERS_URL);

  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Error during get account data');
  }
});

export const createNewUser = createAsyncThunk('posts/createNewUser', async(newUser) => {
  const response = await fetch(USERS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });

  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Error during create a user');
  }
})

/* export const getUser = createAsyncThunk('posts/createNewUser', async(getUser) => {
  const response = await fetch(`USERS_URL + '?email=${userEmail}'`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(getUser)
  });

  const responsePassword = await fetch(`USERS_URL + '?password=${password}'`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(getUser)
  });

  if (response.ok & responsePassword.ok) {
    return await response.json();
  } else {
    return new Error('Email or password is incorrect. Check, please, and try againt');
  }
})
 */

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
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    }
  },
  extraReducers: ( builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) =>
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
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload]
    });
    builder.addCase(createNewUser.rejected, (state, action) =>
    {
      state.error = action.payload;
    });
  }
});

export const usersReducer = usersSlice.reducer;

export const { setUsers } = usersSlice.actions;

export const selectUsersData = (state => state.user);