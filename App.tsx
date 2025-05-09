import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotionTokenScreen from './screens/NotionTokenScreen';
import HomeScreen from './screens/HomeScreen'; // we'll make this soon

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Token">
        <Stack.Screen name="Token" component={NotionTokenScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
