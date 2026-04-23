import { Image, Text, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styles";
import { auth } from "../firebase/firebaseConfig";
import { Button } from "react-native-paper";
import { Alert } from "react-native";
import { signOut } from "firebase/auth";
import showToast from "../utils/showToast";

export default function HomeScreen() {

  async function handleLogout () {
    Alert.alert(
      "Logout",                          
      "Are you sure you want to logout?", 
      [
        {
          text: "Cancel",
          style: "cancel",               
        },
        {
          text: "Logout",
          style: "destructive",          
          onPress: async () => {
            try {
              await signOut(auth);
              showToast("Logout successful");
            } catch (error) {
              Alert.alert("Error", "Failed to logout. Please try again.");
            }
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button mode="contained" style={styles.logoutBtn} onPress={handleLogout}>
        Logout
      </Button>
      <Text style={styles.welcomeText}>Welcome {auth.currentUser.email}</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
        }}
      />
    </SafeAreaView>
  );
}
