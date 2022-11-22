import React from 'react';
import {Button, KeyboardAvoidingView, ScrollView, VStack} from 'native-base';
import {Formik} from 'formik';

import {userModel} from '@constants/yupmodels';

import {AddUser} from '@store/slices/usersSlice';
import Input from '@ui/Input';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {Platform} from 'react-native';

export default function AddUserScreen() {
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={userModel.initials}
      validationSchema={userModel.schema}
      onSubmit={(values, {resetForm}) => {
        dispatch(
          AddUser({
            firstName: values.firstName,
            lastName: values.lastName,
            age: +values.age,
            email: values.email,
            image: values.image,
            address: {
              address: values.address,
              city: values.city,
              postalCode: values.postalCode,
              state: values.state,
            },
          }),
        );
        resetForm();
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <ScrollView
          bg="white"
          bounces={false}
          contentContainerStyle={{flexGrow: Platform.OS === 'ios' ? 1 : 0}}>
          <KeyboardAvoidingView
            flex={1}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <VStack bg="white" flex={1} space={5} p="3">
              <Input
                placeholder="Image URL"
                onChangeText={handleChange('image')}
                onBlur={handleBlur('image')}
                value={values.image}
                errorMessage={touched.image && errors.image}
              />
              <Input
                placeholder="First name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                errorMessage={touched.firstName && errors.firstName}
              />
              <Input
                placeholder="Last name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                errorMessage={touched.lastName && errors.lastName}
              />
              <Input
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                errorMessage={touched.email && errors.email}
              />
              <Input
                placeholder="Age"
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age.toString()}
                errorMessage={touched.age && errors.age}
              />

              <Input
                placeholder="Address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                errorMessage={touched.address && errors.address}
              />
              <Input
                placeholder="City"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                errorMessage={touched.city && errors.city}
              />
              <Input
                placeholder="Postal code"
                onChangeText={handleChange('postalCode')}
                onBlur={handleBlur('postalCode')}
                value={values.postalCode}
                errorMessage={touched.postalCode && errors.postalCode}
              />
              <Input
                placeholder="State"
                onChangeText={handleChange('state')}
                onBlur={handleBlur('state')}
                value={values.state}
                errorMessage={touched.state && errors.state}
              />
              <Button
                onPress={handleSubmit}
                bg="primary.500"
                _text={{color: 'white', fontSize: 'p1', fontWeight: 'bold'}}
                _pressed={{bg: 'primary.600'}}>
                Add User
              </Button>
            </VStack>
          </KeyboardAvoidingView>
        </ScrollView>
      )}
    </Formik>
  );
}
