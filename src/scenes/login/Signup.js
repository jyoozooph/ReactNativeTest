import React, { useState } from "react";
import { Text, View, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import LoginTextBox from '../../components/LoginTextBox/LoginTextBox'
import Styles from "./styles/LoginStyles";

const Logo = require("../../../assets/Unicus Logo cropped.png");

export default ({navigation}) => {
  const onPressSignUp = () => {navigation.navigate("VerificationCode")};
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={Styles.container}>
      <Image style={Styles.logo} source={Logo} />
      <LoginTextBox text="email" />
      <LoginTextBox text="password" isPassword={true} withPasswordMessage={true} />
      <LoginTextBox text="confirm password" isPassword={true} />
      <TouchableOpacity onPress={onPressSignUp} style={Styles.loginBtn}>
        <Text style={Styles.loginText}>Sign up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}