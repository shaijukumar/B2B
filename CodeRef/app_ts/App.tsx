import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppButton from "./app/components/AppButton";
import colors from "../B2BApp/app/config/colors";
import AppText from './app/components/AppText';
import Card from "./app/components/Card";
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

import Screen from './app/components/Screen';

import AppTextInput from './app/components/AppTextInput';



export default function App() {
  debugger;
  let i = 0;
  console.log("123 - " + i);

  //let image = require('../assets/mosh.jpg');

  return (
    <Screen style={styles.screen}>
      <AppTextInput icon="email" placeholder="Email" />
      <AppTextInput icon="email" placeholder="Email1" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  }
});
