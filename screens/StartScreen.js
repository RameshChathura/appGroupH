import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aliceblue'}}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn2.iconfinder.com/data/icons/business-marketing-advertising/64/Marketing_mobile_shop-512.png',
          }}
        />
        <Text style={styles.title}>Welcome to E-Shop</Text>
        <Button
          onPress={() => Alert.alert('Get Started')}
          title="Get Started"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
};
export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
  },
});
