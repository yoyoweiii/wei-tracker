import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CuteButton from "../components/CuteButton";
import { pastelColors } from "../theme/colors";
import { categories } from "../utils/categories";

export default function AddTransactionScreen({ navigation }: any) {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAdd = () => {
    if (!amount || !selectedCategory) {
      Alert.alert("Missing Info", "Please enter amount and select a category");
      return;
    }

    navigation.navigate("Home", {
      newTransaction: {
        amount,
        category: selectedCategory,
        note,
      },
    });

    // Clear
    setAmount("");
    setNote("");
    setSelectedCategory("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 12.99"
      />

      <Text style={styles.label}>Category</Text>
      <FlatList
        data={categories}
        numColumns={4}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryBox,
              selectedCategory === item.name && styles.selectedBox,
            ]}
            onPress={() => setSelectedCategory(item.name)}
          >
            <Text style={styles.emoji}>{item.icon}</Text>
            <Text style={styles.catLabel}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.label}>Note</Text>
      <TextInput
        value={note}
        onChangeText={setNote}
        style={styles.input}
        placeholder="Optional note"
      />

      <CuteButton title="Add Transaction" onPress={handleAdd} />
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryBox: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderColor: pastelColors.card,
    borderWidth: 1,
  },
  selectedBox: {
    backgroundColor: pastelColors.secondary,
  },
  emoji: {
    fontSize: 26,
  },
  catLabel: {
    fontSize: 12,
    marginTop: 4,
    color: pastelColors.text,
  },
});
