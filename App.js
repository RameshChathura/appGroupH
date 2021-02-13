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
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const App = () => {
  return <Providers />;
};

export default App;
