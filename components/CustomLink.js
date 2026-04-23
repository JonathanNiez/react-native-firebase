import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import styles from "../styles/styles";

export default function CustomLink({ label, linkText, to }) {
  const navigation = useNavigation(); 

  return (
    <View style={{ flexDirection: "row", gap: 3, marginTop: 20 }}>
      <Text>{label}</Text>
      <Text style={styles.link} onPress={() => navigation.navigate(to)}>
        {linkText}
      </Text>
    </View>
  );
}