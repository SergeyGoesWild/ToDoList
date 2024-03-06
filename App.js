import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2ef70",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
});
