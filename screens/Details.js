import React, {useReducer} from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import Reducer from '../Reducer/Reducer';
import {Context} from '../Store/Store';

const Details = ({route, navigation}) => {
  const {
    name,
    imageUrl,
    currency,
    stock,
    price,
    description,
    id,
  } = route.params;
  function addToCart() {}

  const initialState = {
    products: [],
    error: null,
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aliceblue'}}>
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.btnCart}>
          <Button
            onPress={() =>
              dispatch({
                type: 'ADD_PRODUCT',
                payload: {name: name, price: price},
              })
            }
            title="Add to Cart"
          />
        </View>
        <View style={styles.cardText}>
          <Text style={styles.title}>{name}</Text>
          <Text>{description}</Text>
          <Text style={styles.price}>{`Price: ${currency} ${price}`}</Text>
          <Text>{`Available: ${stock}`}</Text>
        </View>

        <Button onPress={() => Alert.alert('Buy Now')} title="Buy Now" />
      </View>
    </SafeAreaView>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blanchedalmond',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#20232a',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  price: {fontSize: 20},
  btnCart: {
    alignSelf: 'flex-end',
    margin: 10,
  },
  cardText: {alignSelf: 'flex-start', paddingHorizontal: 30},
});
