import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/LoginScreen';
import Products from './screens/Products';
import Start from './screens/StartScreen';
import SignIn from './screens/SignIn';

const App = () => {
  return <Products />;
};

export default App;
