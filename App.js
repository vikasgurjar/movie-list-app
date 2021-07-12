import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation'
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
const store = configureStore

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
