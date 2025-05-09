import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function NotionTokenScreen({ navigation }: any) {
  const [token, setToken] = useState('');

  // Check if token already exists and skip screen
  useEffect(() => {
    const checkToken = async () => {
      const savedToken = await SecureStore.getItemAsync('notion_token');
      if (savedToken) {
        navigation.replace('Home'); // Go to home page
      }
    };
    checkToken();
  }, []);

  const saveToken = async () => {
    if (token.trim().length === 0) {
      Alert.alert('Token is required!');
      return;
    }
    await SecureStore.setItemAsync('notion_token', token.trim());
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Notion API Token</Text>
      <TextInput
        style={styles.input}
        placeholder="secret_xxx..."
        value={token}
        onChangeText={setToken}
        secureTextEntry
      />
      <Button title="Save Token" onPress={saveToken} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10,
    marginBottom: 20, borderRadius: 5
  }
});
