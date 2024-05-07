import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Auth } from "aws-amplify";
import LoginTextBox from "../../components/LoginTextBox/LoginTextBox";
import Styles from "./styles/LoginStyles";

const Logo = require("../../../assets/Unicus Logo cropped.png");

export default ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onPressLogin = async () => {
    try {
      console.log({ username: username, password: password });
      const User = await Auth.signIn({
        username,
        password,
      });
      console.log(user);
      // switch (nextStep.signInStep) {
      //   case "CONFIRM_SIGN_UP":
      //     navigation.navigate("VerificationCode");
      //     break;

      //   default:
      //     break;
      // }
    } catch (error) {
      error.name === "UserNotConfirmedException" && navigation.navigate("VerificationCode");
      console.log("error signing in", error.name);
    }
  };

  const onPressSignUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Styles.container}>
        <Image style={Styles.logo} source={Logo} />
        <LoginTextBox text="email" handleTextChange={setUsername} />
        <LoginTextBox text="password" handleTextChange={setPassword} isPassword={true} />
        <TouchableOpacity onPress={onPressLogin} style={Styles.loginBtn}>
          <Text style={Styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ color: "#fff" }}>
          Don't already have an account?{" "}
          <Text onPress={onPressSignUp} style={{ color: "#fcba03" }}>
            Sign Up
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
