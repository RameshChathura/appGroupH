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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/LoginScreen';
import Products from './screens/Products';
import Start from './screens/StartScreen';
import SignUp from './screens/SignUp';
import Details from './screens/Details';
import Pricing from './screens/Pricing';

const MainStack = createStackNavigator();
const SecondStack = createStackNavigator();
const DeepStack = createStackNavigator();

function ProductInfo() {
  return (
    <DeepStack.Navigator initialRouteName="ProductDetails">
      <DeepStack.Screen name="ProductDetails" component={Details} />
      <DeepStack.Screen name="Pricing" component={Pricing} />
    </DeepStack.Navigator>
  );
}
function Home() {
  return (
    <SecondStack.Navigator initialRouteName="Login">
      <SecondStack.Screen name="Login" component={Login} />
      <SecondStack.Screen name="SignUp" component={SignUp} />
      <SecondStack.Screen name="Products" component={Products} />
      <SecondStack.Screen name="ProductInfo" component={ProductInfo} />
    </SecondStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
