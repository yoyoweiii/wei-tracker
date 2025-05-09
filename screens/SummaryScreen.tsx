import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import axios from 'axios';
import { getNotionToken } from '../utils/getNotionToken';

export default function SummaryScreen() {
  const [data, setData] = useState<any[]>([]);

  const loadTransactions = async () => {
    const token = await getNotionToken();
    const notionDatabaseId = 'your-database-id-here'; // Same as before

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    };

    const body = { page_size: 100 };

    try {
      const res = await axios.post(`https://api.notion.com/v1/databases/${notionDatabaseId}/query`, body, { headers });

      const totals: { [key: string]: number } = {};

      res.data.results.forEach((page: any) => {
        const cat = page.properties.Category?.select?.name;
        const amt = page.properties.Amount?.number || 0;
        if (cat) {
          totals[cat] = (totals[cat] || 0) + amt;
        }
      });

      const chartData = Object.entries(totals).map(([name, amount], i) => ({
        name,
        amount,
        color: ['#f00', '#0f0', '#00f', '#ff0', '#0ff'][i % 5],
        legendFontColor: '#333',
        legendFontSize: 12
      }));

      setData(chartData);
    } catch (e) {
      console.error('Error loading summary', e);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Spending by Category</Text>
      {data.length > 0 && (
        <PieChart
          data={data}
          width={Dimensions.get('window').width - 40}
          height={220}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      )}
    </ScrollView>
  );
}
