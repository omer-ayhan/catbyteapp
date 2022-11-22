import * as yup from 'yup';

export const userModel = {
  initials: {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    address: '',
    city: '',
    image: '',
    postalCode: '',
    state: '',
  },
  schema: yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    postalCode: yup.string().required(),
    state: yup.string().required(),
  }),
};
