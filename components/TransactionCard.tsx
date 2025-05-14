import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { pastelColors } from '../theme/colors';

export default function TransactionCard({ category, amount, note }: { category: string; amount: string; note?: string }) {
  return (
    <View style={styles.card}>
      <Ionicons name="cash-outline" size={24} color={pastelColors.secondary} />
      <View style={styles.details}>
        <Text style={styles.category}>{category}</Text>
        {note && <Text style={styles.note}>{note}</Text>}
      </View>
      <Text style={styles.amount}>-${amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: pastelColors.card,
    padding: 14,
    marginVertical: 6,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
  },
  note: {
    fontSize: 12,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ff6b6b',
  },
});
