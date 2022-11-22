import {configureStore, } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [thunk as ThunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
