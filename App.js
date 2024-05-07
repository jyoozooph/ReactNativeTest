import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";

import Login from "./src/scenes/login/Login";
import Signup from "./src/scenes/login/Signup";
import VerificationCode from "./src/scenes/login/VerificationCode";

const Stack = createNativeStackNavigator();
Amplify.configure(amplifyconfig);

export default App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="VerificationCode" component={VerificationCode} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};
