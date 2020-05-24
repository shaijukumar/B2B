import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import 'react-native-gesture-handler';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import AccountScreen from './app/screens/AccountScreen';


export default function App() {
  return (
    <AppContainer />
  );
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: {
        headerShown: false,
        //title: "AccountScreen",
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
