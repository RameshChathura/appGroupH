import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aliceblue'}}>
      <Button title="Login" onPress={() => navigation.navigate('Products')} />

      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />

      <View style={styles.container}>
        <Text style={styles.title}>Hello Login</Text>
      </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  button: {marginVertical: 10},
});
