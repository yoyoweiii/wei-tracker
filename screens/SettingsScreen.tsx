import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { pastelColors } from '../theme/colors';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Button title="Update Notion Token" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pastelColors.background,
    padding: 20,
  },
  header: {
    fontSize: 22,
    marginBottom: 20,
    color: pastelColors.text,
  },
});
