import { useNavigation } from "@react-navigation/native";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebase/firebaseConfig";
import styles from "../styles/styles";
import CustomLink from "../components/CustomLink";
import CustomButton from "../components/CustomButton";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleRegister() {
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful");
      navigation.navigate("Login");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-email":
            alert("The email address is not valid.");
            break;
          case "auth/user-not-found":
            alert("No account found with this email.");
            break;
          case "auth/wrong-password":
            alert("Incorrect password. Please try again.");
            break;
          case "auth/invalid-credential":
            alert("Invalid email or password.");
            break;
          case "auth/user-disabled":
            alert("This account has been disabled.");
            break;
          case "auth/too-many-requests":
            alert("Too many failed attempts. Please try again later.");
            break;
          case "auth/network-request-failed":
            alert("Network error. Please check your connection.");
            break;
          default:
            alert("Login failed. Please try again.");
            console.error(
              "Unhandled Firebase error:",
              error.code,
              error.message,
            );
        }
      } else {
        alert("An unexpected error occurred.");
        console.error("Non-Firebase error:", error);
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
        secureTextEntry={!showPassword}
         right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.inputBox}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        right={
          <TextInput.Icon
            icon={showConfirmPassword ? "eye-off" : "eye"}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        }
      />

      <CustomButton title="Register" onPress={handleRegister} />

      <CustomLink
        label="Already have an account?"
        linkText="Login"
        to="Login"
      />
    </SafeAreaView>
  );
}
