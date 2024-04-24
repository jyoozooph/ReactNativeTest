import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import LoginTextBox from "../../components/LoginTextBox/LoginTextBox";
import { signUp } from "aws-amplify/auth";
import Styles from "./styles/LoginStyles";

const Logo = require("../../../assets/Unicus Logo cropped.png");

export default ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    console.log({
      passwordsMatch: !passwordsMatch,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
    });
  }, [email, password, confirmPassword]);

  const onPressSignUp = async () => {
    try {
      const signupInput = {
        username: email,
        password: password,
        options: {
          autoSignIn: true,
        },
      };
      const { isSignUpComplete, userId, nextStep } = await signUp(signupInput);
      nextStep.signUpStep === "CONFIRM_SIGN_UP" && navigation.navigate("VerificationCode");

      console.log({
        isSignUpComplete: isSignUpComplete,
        userId: userId,
        nextStep: nextStep,
      });
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const handlePasswordChange = (text) => {
    setPasswordsMatch(text === confirmPassword);
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setPasswordsMatch(text === password);
    setConfirmPassword(text);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Styles.container}>
      <Image style={Styles.logo} source={Logo} />
      <LoginTextBox text="email" handleTextChange={setEmail} />
      <LoginTextBox
        text="password"
        handleTextChange={handlePasswordChange}
        isPassword={true}
        withPasswordMessage={true}
      />
      <LoginTextBox text="confirm password" handleTextChange={handleConfirmPasswordChange} isPassword={true} />
      <View style={{ width: "80%" }}>
        {!passwordsMatch && <Text style={{ color: "#ff0000" }}>Passwords don't match</Text>}
      </View>
      <TouchableOpacity
        disabled={!passwordsMatch || !email || !password || !confirmPassword}
        onPress={onPressSignUp}
        style={Styles.loginBtn}
      >
        <Text style={Styles.loginText}>Sign up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
