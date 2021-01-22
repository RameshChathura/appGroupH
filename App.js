import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Login from './screens/LoginScreen';
import Products from './screens/Products';
import Start from './screens/StartScreen';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
