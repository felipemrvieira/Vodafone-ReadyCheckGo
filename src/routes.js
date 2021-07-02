import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import DeviceLogin from './pages/DeviceLogin';
import DeviceLoginValidation from './pages/DeviceLoginValidation';
import Installation from './pages/Installation';
import MainMenu from './pages/MainMenu';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="DeviceLogin" component={DeviceLogin} />
        <Stack.Screen
          name="DeviceLoginValidation"
          component={DeviceLoginValidation}
        />
        <Stack.Screen name="Installation" component={Installation} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
