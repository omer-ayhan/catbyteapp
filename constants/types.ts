import {UserType} from '@store/slices/usersSlice';

export type Navigate = {
  navigate: (route: string, params?: Partial<UserType>) => void;
};

export type ParamList = {
  OverView: undefined;
  UserDetails: UserType;
  AddUser: undefined;
};
