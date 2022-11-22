import {AnyAction} from 'redux';

const initialState = {};
export default function usersReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'GET_USERS':
      return state;
    default:
      return state;
  }
}
