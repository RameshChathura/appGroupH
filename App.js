import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
} from 'react-native';
import Providers from './navigation/index';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Products from './screens/Products';
import Details from './screens/Details';
import LoginScreen from './screens/LoginScreen';

import Store from './Store/Store';

const AppStack = createStackNavigator();

const App = () => {
  return <Providers />;
};

export default App;
