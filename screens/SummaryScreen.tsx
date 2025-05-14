import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { pastelColors } from '../theme/colors';

const screenWidth = Dimensions.get('window').width;

export default function SummaryScreen() {
  const data = [
    { name: 'Food', amount: 200, color: '#FFADAD', legendFontColor: '#444', legendFontSize: 14 },
    { name: 'Travel', amount: 150, color: '#FFD6A5', legendFontColor: '#444', legendFontSize: 14 },
    { name: 'Bills', amount: 250, color: '#FDFFB6', legendFontColor: '#444', legendFontSize: 14 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Breakdown</Text>
      <PieChart
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          color: () => `#444`,
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pastelColors.background,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: pastelColors.text,
    fontWeight: '600',
  },
});
