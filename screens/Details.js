import React from 'react';

import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';

const Details = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'aliceblue'}}>
      <Button
        title="Go to Pricing"
        onPress={() => navigation.navigate('Pricing')}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Details Screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default Details;

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
