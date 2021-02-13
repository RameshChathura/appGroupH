import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import Details from '../screens/Details';
import Products from '../screens/Products';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductInfo" component={Details} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
export default AppStack;
