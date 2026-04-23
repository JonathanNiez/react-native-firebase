import { Link, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Text, ToastAndroid, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import styles from "../styles/styles";
import { FirebaseError } from "firebase/app";
import showToast from "../utils/showToast";
import CustomLink from "../components/CustomLink";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Please enter email and password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showToast("Login successful");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-email":
            Alert.alert("The email address is not valid.");
            break;
          case "auth/user-not-found":
            Alert.alert("No account found with this email.");
            break;
          case "auth/wrong-password":
            Alert.alert("Incorrect password. Please try again.");
            break;
          case "auth/invalid-credential":
            Alert.alert("Invalid email or password.");
            break;
          case "auth/user-disabled":
            Alert.alert("This account has been disabled.");
            break;
          case "auth/too-many-requests":
            Alert.alert("Too many failed attempts. Please try again later.");
            break;
          case "auth/network-request-failed":
            Alert.alert("Network error. Please check your connection.");
            break;
          default:
            Alert.alert("Login failed. Please try again.");
            console.error(
              "Unhandled Firebase error:",
              error.code,
              error.message,
            );
        }
      } else {
        Alert.alert("An unexpected error occurred.");
        console.error("Non-Firebase error:", error);
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
        placeholder="Password"
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
      <CustomButton title="Login" onPress={handleLogin} />
      

      <CustomLink label="Don't have an account?" linkText="Register" to="Register" />
    </SafeAreaView>
  );
}
