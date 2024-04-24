import React, { useState, useRef, forwardRef } from "react";
import { Text, View, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Styles from "./styles/LoginStyles";

export default ({ navigation }) => {
  const inputRefs = useRef([]);

  const handleTextChange = (text, i) => text.length === 1 && inputRefs.current[i + 1]?.focus();

  const handleBackSpace = (key, i) => {
    key === "Backspace" && inputRefs.current[i];
  };

  return (
    <KeyboardAvoidingView style={Styles.container}>
      <Text style={{ color: "#fff", fontSize: "30", fontWeight: "600", marginBottom: 10 }}>Verification Code</Text>
      <Text style={{ color: "#fff", marginBottom: 30}}>Enter the 4 digit code that you recieved on your e-mail.</Text>
      <View style={Styles.codeContainer}>
        {Array.from({ length: 4 }, (_, i) => (
          <CodeTextBox
            handleTextChange={handleTextChange}
            handleBackSpace={handleBackSpace}
            ref={(el) => (inputRefs.current[i] = el)}
            autoFocus={i === 0}
            index={i}
          />
        ))}
      </View>
    </KeyboardAvoidingView>
  );
};

const CodeTextBox = forwardRef(({ autoFocus = false, handleTextChange, handleBackSpace, index }, ref) => {
  const [containerColour, setContainerColour] = useState("#fff");

  const handleChange = (text) => {
    if (text.length === 1) {
      setContainerColour("#fcba03");
    }
    else {
      setContainerColour("#fff");
    }
  };

  return (
    <View style={[Styles.verificationView, { borderColor: containerColour }]}>
      <TextInput
        ref={ref}
        placeholderTextColor="grey"
        keyboardType="numeric"
        maxLength={1}
        textAlign="center"
        autoFocus={autoFocus}
        style={Styles.verificationTextInput}
        onChangeText={(o) => handleTextChange(o, index)}
        onChange={({ nativeEvent }) => handleChange(nativeEvent.text)}
      />
    </View>
  );
});
