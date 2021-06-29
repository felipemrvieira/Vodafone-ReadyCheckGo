import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' backgroundColor='#775ba3' />
      <Routes />
    </SafeAreaProvider>
  );
}
