import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const menu = [
    { name: 'Ledger', icon: 'notebook', color: '#FFE0B2' },
    { name: 'Recurring', icon: 'calendar-repeat', color: '#B2EBF2' },
    { name: 'Category', icon: 'shape-outline', color: '#D1C4E9' },
    { name: 'Reimburse', icon: 'cash-refund', color: '#C8E6C9' },
    { name: 'Bookmarks', icon: 'bookmark-outline', color: '#FFCDD2' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🎉 You're logged in with Notion Token!</Text>

      <View style={styles.menuRow}>
        {menu.map((item) => (
          <TouchableOpacity key={item.name} style={[styles.menuItem, { backgroundColor: item.color }]}>
            <Icon name={item.icon} size={28} />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>Dec Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Expense:</Text>
          <Text style={styles.expense}>3,580</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Income:</Text>
          <Text style={styles.income}>2,494</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFBEA',
  },
  header: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  menuItem: {
    width: 100,
    height: 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 3,
  },
  menuText: {
    marginTop: 6,
    fontSize: 14,
  },
  summaryBox: {
    marginTop: 30,
    backgroundColor: '#F8BBD0',
    padding: 20,
    borderRadius: 16,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
  },
  expense: {
    color: '#E53935',
    fontWeight: 'bold',
  },
  income: {
    color: '#43A047',
    fontWeight: 'bold',
  },
});
