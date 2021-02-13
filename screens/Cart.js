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

const Cart = ({route}) => {
  const [state, dispatch] = useContext(Context);
};
export default Cart;
