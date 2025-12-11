import { Link, router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const name: string = "JADE MARK ABRINICA";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.text1}>Welcome, {name}</Text>
        <Text style={styles.text2}>Hello World! Expo</Text>

        {/* Option 1: Using <Link /> */}
        <Link href="/task">
          <Text style={styles.link}>Go to Task Page</Text>
        </Link>

        {/* Option 2: Using router.push() */}
        <Pressable style={styles.button} onPress={() => router.push("/task")}>
          <Text style={styles.buttonText}>Move to Task Page</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  text1: {
    color: "red",
    fontSize: 40,
    marginBottom: 10,
  },
  text2: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 50,
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  link: {
    color: "orange",
    marginTop: 20,
    fontSize: 18,
  },
  button: {
    padding: 12,
    backgroundColor: "yellow",
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
  },
});