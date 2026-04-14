import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styles";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
}