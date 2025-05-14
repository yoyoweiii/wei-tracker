import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { pastelColors } from "../theme/colors";
import TransactionCard from "../components/TransactionCard";
import CuteEmpty from "../components/CuteEmpty";

export default function HomeScreen({ route }: any) {
  const isFocused = useIsFocused();
  const [transactions, setTransactions] = useState([
    { category: "Food", amount: "12.50", note: "Lunch 🥗" },
    { category: "Groceries", amount: "42.10", note: "Walmart 🛒" },
  ]);

  const newTx = route?.params?.newTransaction;

  useEffect(() => {
    if (isFocused && newTx) {
      setTransactions((prev) => [newTx, ...prev]);
      // Optional: Clear param to prevent duplication
      route.params.newTransaction = null;
    }
  }, [isFocused, newTx]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recent Transactions</Text>
      <ScrollView style={styles.scroll}>
        {transactions.length === 0 ? (
          <CuteEmpty />
        ) : (
          transactions.map((tx, index) => (
            <TransactionCard
              key={index}
              category={tx.category}
              amount={tx.amount}
              note={tx.note}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pastelColors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: pastelColors.text,
    marginBottom: 10,
  },
  scroll: {
    flex: 1,
  },
});
