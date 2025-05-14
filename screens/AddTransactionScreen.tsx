import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { pastelColors } from '../theme/colors';
import CuteButton from '../components/CuteButton';

export default function AddTransactionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount</Text>
      <TextInput style={styles.input} placeholder="$0.00" keyboardType="numeric" />

      <Text style={styles.label}>Category</Text>
      <TextInput style={styles.input} placeholder="e.g. Food, Travel" />
      <CuteButton title="Add Transaction" onPress={() => alert('Added!')} />
      {/*<Button title="Add Transaction" color={pastelColors.secondary} onPress={() => {}} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pastelColors.background,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
    color: pastelColors.text,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
