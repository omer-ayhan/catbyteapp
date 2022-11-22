import theme from '@styles/theme';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import NavigationContainer from './navigators/MainNavigator';

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
