import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const name: string = "Jade Mark";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Welcome, {name}</Text>
        <Text style={styles.subtitle}>Hello World! Expo</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0D0D0D", // dark masculine background
  },
  scroll: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#1E90FF", // cool blue
    fontSize: 42,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  subtitle: {
    backgroundColor: "#1C1C1C",
    color: "#00E5FF", // neon aqua
    fontSize: 48,
    marginTop: 15,
    padding: 12,
    borderRadius: 12,
    fontWeight: "bold",
    shadowColor: "#00E5FF",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
