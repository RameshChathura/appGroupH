import React from 'react';

import {StyleSheet, Button, Text, View, SafeAreaView} from 'react-native';

const Pricing = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aliceblue'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Pricing Screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default Pricing;

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
