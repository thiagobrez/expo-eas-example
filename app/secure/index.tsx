import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SecurePage() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Secure",
        }}
      />

      <Text>Secure Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
