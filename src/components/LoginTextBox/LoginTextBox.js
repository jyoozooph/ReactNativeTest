import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./LoginTextBoxStyles";

export default TextBox = ({ text, isPassword = false, withPasswordMessage = false, handleTextChange }) => (
  <>
    <View style={Styles.inputView}>
      <TextInput
        placeholder={text}
        placeholderTextColor="grey"
        secureTextEntry={isPassword}
        spellCheck={false}
        style={Styles.textInput}
        textContentType="oneTimeCode"
        onChangeText={handleTextChange}
      />
      <View style={Styles.inputUnderline} />
    </View>
    {/* {withPasswordMessage && <Text style={Styles.passwordMessage}>Password must contain a minimum of 8 characters</Text>} */}
  </>
);
