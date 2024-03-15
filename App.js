import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import NavigationScreen from "./src/screens/NavigationScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: "#fff" }} />

      <NavigationScreen />

      <SafeAreaView style={{ backgroundColor: "#f2f2ff" }} />
    </View>
  );
}
