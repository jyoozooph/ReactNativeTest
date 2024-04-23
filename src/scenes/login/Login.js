import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Styles from "./styles/LoginStyles";

const Logo = require("../../../assets/Unicus Logo cropped.png");

export default ({ navigation }) => {
  const onPressLogin = () => {};
  const onPressSignUp = () => {};
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Styles.container}>
      <Image style={Styles.logo} source={Logo} />
      <TextBox text="email" />
      <TextBox text="password" isPassword={true} />
      <TouchableOpacity onPress={onPressLogin} style={Styles.loginBtn}>
        <Text style={Styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={{ color: "#ffffff"}}>
        Don't already have an account?{" "}
        <Text onPress={onPressSignUp} style={{ color: "#fcba03" }}>
          Sign Up
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const TextBox = ({ text, isPassword = false }) => (
  <View style={Styles.inputView}>
    <TextInput
      placeholder={text}
      placeholderTextColor="grey"
      textContentType="username"
      secureTextEntry={isPassword}
      spellCheck={false}
      style={Styles.textInput}
    />
    <View style={Styles.inputUnderline} />
  </View>
);
