import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Routes from '@constants/routes';

import OverviewScreen from '@screens/OverviewScreen';
import AddUserScreen from '@screens/AddUserScreen';
import UserDetailsScreen from '@screens/UserDetailsScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const {AddUser, Overview, UserDetails} = Routes;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Overview}
          component={OverviewScreen}
          options={{title: 'Overview', headerShadowVisible: false}}
        />
        <Stack.Screen
          name={AddUser}
          component={AddUserScreen}
          options={{title: 'Add User', headerShadowVisible: false}}
        />
        <Stack.Screen
          name={UserDetails}
          component={UserDetailsScreen}
          options={{title: 'User Details', headerShadowVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
