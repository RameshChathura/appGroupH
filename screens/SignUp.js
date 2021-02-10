import React from 'react';

import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aliceblue'}}>
      <Button title="SignUp" onPress={() => navigation.navigate('Products')} />
      <View style={styles.container}>
        <Text style={styles.title}>Hello SignUp!</Text>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;

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
});
