import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { pastelColors } from '../theme/colors';

export default function CuteButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: pastelColors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 20,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
