import React, {useEffect, useState} from 'react';
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

const Products = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://6wavrrn6r7.execute-api.us-west-2.amazonaws.com/products')
      .then((response) => response.json())
      .then((json) => {
        setData(json.Items);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aliceblue'}}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails', item)}>
                <View style={[styles.card]}>
                  <Image
                    style={{width: 200, height: 200}}
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                  <View style={styles.cardText}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text
                      style={
                        styles.price
                      }>{`${item.currency}: ${item.price}`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
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
  },
  price: {fontSize: 20},
  cardText: {
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
  },
  button: {
    alignSelf: 'flex-end',
    margin: 5,
  },
});

export default Products;
