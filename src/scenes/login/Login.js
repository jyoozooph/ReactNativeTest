import React, { useState } from "react";
import { Text, View, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import LoginTextBox from '../../components/LoginTextBox/LoginTextBox'
import Styles from "./styles/LoginStyles";

const Logo = require("../../../assets/Unicus Logo cropped.png");

export default ({ navigation }) => {
  const onPressLogin = () => {};
  const onPressSignUp = () => {navigation.navigate("Signup")};
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Styles.container}>
      <Image style={Styles.logo} source={Logo} />
      <LoginTextBox text="email" />
      <LoginTextBox text="password" isPassword={true} />
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
  );
};