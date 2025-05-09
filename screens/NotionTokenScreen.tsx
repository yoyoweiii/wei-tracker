import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function NotionTokenScreen({ navigation }: any) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const checkToken = async () => {
      const savedToken = await SecureStore.getItemAsync('notion_token');
      console.log("Stored token:", savedToken);
      if (savedToken) {
        navigation.replace('Home');
      }
    };
    checkToken();
  }, []);

  const saveToken = async () => {
    if (token.trim().length === 0) {
      Alert.alert('Token required');
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
  title: { fontSize: 20, marginBottom: 10, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
  },
});
