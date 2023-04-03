import { Link, Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

function LogoTitle({ title }) {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={{ width: 30, height: 30 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <Text style={styles.logoText}>{title}</Text>
    </View>
  );
}

export default function HomePage() {
  const router = useRouter();

  const goToSecureRoute = async () => {
    const auth = await LocalAuthentication.authenticateAsync();

    if (auth.success) {
      router.push("/secure");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTitle: (props) => <LogoTitle title={props.children} />,
        }}
      />

      <Text>Home Screen - Over the air updates!</Text>

      <TouchableOpacity onPress={goToSecureRoute}>
        <Text>Go to secure route</Text>
      </TouchableOpacity>

      <Link href="/camera">Go to camera</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
  },
});
