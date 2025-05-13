import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import RecordScreen from "./screens/AddTransactionScreen";
import AssetsScreen from "./screens/SummaryScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home-outline";
            if (route.name === "Record") iconName = "plus-circle-outline";
            if (route.name === "Assets") iconName = "wallet-outline";

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FF8A65",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Record" component={RecordScreen} />
        <Tab.Screen name="Assets" component={AssetsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
