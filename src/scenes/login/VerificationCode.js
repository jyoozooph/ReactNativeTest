import React, { useState, useEffect, useRef, forwardRef } from "react";
import { confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import { Auth } from "aws-amplify";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Styles from "./styles/LoginStyles";

export default ({ navigation }) => {
  const inputRefs = useRef([]);
  const [confirmationCode, setCode] = useState("XXXXXX");
  const [username, setEmail] = useState("jyoozooph@gmail.com");

  const handleTextChange = (text, i) => {
    text.length === 1 && inputRefs.current[i + 1]?.focus();
    text = text.length === 0 ? "X" : text;
    const updatedCode = confirmationCode.substring(0, i) + text + confirmationCode.substring(i + 1);
    setCode(updatedCode);
    console.log(updatedCode);
  };

  const handleBackSpace = (key, i) => {
    if (key === "Backspace") {
      inputRefs.current[i] && inputRefs.current[i - 1].focus();
      const updatedCode = confirmationCode.substring(0, i - 1) + "X" + confirmationCode.substring(i);
      setCode(updatedCode);
      console.log(updatedCode);
    }
  };

  const onPressResendCode = async () => {
    try {
      await resendSignUpCode({ username });
      console.log("Code resent successfully");
    } catch (error) {
      console.error("Error resending code: ", error);
    }
  };

  const onPressConfirm = async () => {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      });

      console.log({
        isSignUpComplete: isSignUpComplete,
        nextStep: nextStep,
      });

      navigation.navigate("Login");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView onclick={Keyboard.dismiss} style={Styles.container}>
        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "600", marginBottom: 10 }}>Verification Code</Text>
        <Text style={{ color: "#fff", marginBottom: 30 }}>
          Enter the 4 digit code that you recieved on your e-mail.
        </Text>
        <View style={Styles.codeContainer}>
          {Array.from({ length: 6 }, (_, i) => (
            <CodeTextBox
              value={confirmationCode[i]}
              handleTextChange={handleTextChange}
              handleBackSpace={handleBackSpace}
              ref={(el) => (inputRefs.current[i] = el)}
              autoFocus={i === 0}
              index={i}
            />
          ))}
        </View>
        <Text onPress={onPressResendCode} style={{ color: "#fcba03", fontSize: 16 }}>
          Resend Code
        </Text>
        <TouchableOpacity disabled={isNaN(confirmationCode)} onPress={onPressConfirm} style={Styles.loginBtn}>
          <Text style={Styles.loginText}>Confirm</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const CodeTextBox = forwardRef(({ autoFocus = false, handleTextChange, handleBackSpace, index, value }, ref) => {
  const [containerColour, setContainerColour] = useState("#fff");
  useEffect(() => {
    if (value !== "X") {
      setContainerColour("#fcba03");
    } else {
      setContainerColour("#fff");
    }
  }, [value]);

  const handleChange = (text) => {
    if (text.length === 1) {
      setContainerColour("#fcba03");
    } else {
      setContainerColour("#fff");
    }
  };

  return (
    <View key={index} style={[Styles.verificationView, { borderColor: containerColour }]}>
      <TextInput
        value={value === "X" ? "" : value}
        ref={ref}
        placeholderTextColor="grey"
        keyboardType="numeric"
        maxLength={1}
        textAlign="center"
        autoFocus={autoFocus}
        style={Styles.verificationTextInput}
        onChangeText={(o) => handleTextChange(o, index)}
        onChange={({ nativeEvent }) => handleChange(nativeEvent.text)}
        onKeyPress={({ nativeEvent }) => handleBackSpace(nativeEvent.key, index)}
      />
    </View>
  );
});
