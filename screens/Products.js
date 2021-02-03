import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Products = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://6wavrrn6r7.execute-api.us-west-2.amazonaws.com/products')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.Items);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View style={[styles.container]}>
                <Text style={styles.title}>{item.name}</Text>
                <Image
                  style={{width: 300, height: 300}}
                  source={{
                    uri: item.imageUrl,
                  }}
                />
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    padding: 24,
    margin: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default Products;
