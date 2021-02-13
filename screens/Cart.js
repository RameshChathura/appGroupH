import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {Context} from '../Store/Store';

const Cart = ({route, navigation}) => {
  const [state, dispatch] = useContext(Context);
  render(
    <View>
      <Text>Cart</Text>
    </View>,
  );
};
export default Cart;
