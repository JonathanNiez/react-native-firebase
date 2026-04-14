import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
        }}
      />
    </SafeAreaView>
  );
}