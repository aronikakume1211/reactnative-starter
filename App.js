import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Page content</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
