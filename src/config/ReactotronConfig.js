import Reactoton from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactoton.configure().useReactNative().connect();

  console.tron = tron;
  tron.clear();
}
