import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getNotionToken } from '../utils/getNotionToken';
import axios from 'axios';

export default function AddTransactionScreen() {
  const [category, setCategory] = useState('Food');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const notionDatabaseId = 'your-database-id-here'; // Replace with your Notion DB ID

  const submitTransaction = async () => {
    const token = await getNotionToken();
    if (!token) return Alert.alert('Notion token not found');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    };

    const payload = {
      parent: { database_id: notionDatabaseId },
      properties: {
        Category: {
          select: { name: category }
        },
        Amount: {
          number: parseFloat(amount)
        },
        Note: {
          rich_text: [{ text: { content: note } }]
        },
        Date: {
          date: { start: new Date().toISOString() }
        }
      }
    };

    try {
      const res = await axios.post('https://api.notion.com/v1/pages', payload, { headers });
      Alert.alert('Success', 'Transaction added!');
      setAmount('');
      setNote('');
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      Alert.alert('Error', 'Failed to send to Notion');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <Picker
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
        style={styles.picker}
      >
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Transport" value="Transport" />
        <Picker.Item label="Entertainment" value="Entertainment" />
        <Picker.Item label="Shopping" value="Shopping" />
      </Picker>
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />
      <TextInput
        placeholder="Note (optional)"
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />
      <Button title="Submit" onPress={submitTransaction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  picker: { marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5
  }
});
