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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
