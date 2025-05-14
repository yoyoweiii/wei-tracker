import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function CuteEmpty() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/empty-cat.json')}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>No records yet 🐱</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 16,
    color: '#999',
    marginTop: 10,
  },
});
