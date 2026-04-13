import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./screens/RegisterSreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Register" component={RegisterScreen} />
        <RootStack.Screen
          options={{ headerShown: true }}
          name="Home"
          component={HomeScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
