import {combineReducers, configureStore} from '@reduxjs/toolkit';
import usersReducer from './reducers/usersReducers';

const rootreducers = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootreducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
