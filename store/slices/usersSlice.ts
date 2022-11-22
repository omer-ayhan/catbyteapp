import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import usersApi from '@services/usersApi';

const {getUsers} = usersApi;

export const getUsersThunk = createAsyncThunk('users/getUsers', async () => {
  const response = await getUsers();
  return response.data;
});

export type InitialState = {
  users: {
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
    age: number;
    id: number;
    address: {
      address: string;
      city: string;

      postalCode: string;
      state: string;
    };
  }[];
  isUsersLoading: boolean;
};

export type UserType = InitialState['users'][number];

const initialState: InitialState = {
  isUsersLoading: false,
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    AddUser(state, action: PayloadAction<Omit<UserType, 'id'>>) {
      state.users.unshift({
        id: state.users.length + 1,
        ...action.payload,
      });
    },
    deleteUser(state, action: PayloadAction<{id: UserType['id']}>) {
      console.log(action.payload);
      state.users = state.users.filter(user => user.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsersThunk.pending, state => {
        // Add user to the state array
        state.isUsersLoading = true;
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        // Add user to the state array
        state.users = action.payload.users as never;
        state.isUsersLoading = false;
      })
      .addCase(getUsersThunk.rejected, state => {
        // Add user to the state array
        state.isUsersLoading = false;
      });
  },
});

const {actions, reducer} = usersSlice;

export const {AddUser, deleteUser} = actions;

export default reducer;
