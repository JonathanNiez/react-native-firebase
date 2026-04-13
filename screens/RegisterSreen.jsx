import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRegister() {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters");
    } else {
      try {
        // await createUserWithEmailAndPassword();

        alert("Registration successful");
        navigation.navigate("Login");
      } catch (error) {
        alert("Registration failed: " + error.message);
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register</Text>

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
      <TextInput
        placeholder="Confirm Password"
        style={styles.inputBox}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />

      <View style={{ flexDirection: "row", gap: 3, marginTop: 20 }}>
        <Text>Already have an account?</Text>
        <Text style={styles.link} onPress={() => navigation.goBack()}>
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputBox: {
    width: "80%",
    fontSize: 16,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "#5f5f5f",
    borderWidth: 1,
    borderRadius: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
