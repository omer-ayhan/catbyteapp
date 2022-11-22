import axios from 'axios';

import {API_URL} from '@constants/config';

export const usersRoot = axios.create({
  baseURL: API_URL,
});

const usersApi = {
  getUsers: () => usersRoot.get('/users'),
  getUser: (id: number) => usersRoot.get(`/users/${id}`),
};

export default usersApi;
