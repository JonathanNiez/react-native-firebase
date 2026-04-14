import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/styles";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter email and password");
    } else {
      try {
        // await signInWithEmailAndPassword();
        alert("Login successful");
        navigation.navigate("Home");
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.inputBox}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password "
        style={styles.inputBox}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

      <View style={{ flexDirection: "row", gap: 3, marginTop: 20 }}>
        <Text>Don't have an account?</Text>
        <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
          Register
        </Text>
      </View>
    </SafeAreaView>
  );
}