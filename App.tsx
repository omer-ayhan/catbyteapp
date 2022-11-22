import {getUsersThunk} from '@store/slices/usersSlice';
import {store} from '@store/store';
import theme from '@styles/theme';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import NavigationContainer from './navigators/MainNavigator';

store.dispatch(getUsersThunk() as never);

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
