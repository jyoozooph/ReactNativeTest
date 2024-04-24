import React, { useState, useRef } from "react";
import { Text, View, Image, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Styles from "./styles/LoginStyles";

export default ({ navigation }) => {
  const inputRefs = useRef([]);

  inputRefs.current = Array(4)
    .fill(React.createRef());

  const onTextChange = (text, index) => {
    // Move focus to the next input if there's a next input and current input has one character
    console.log(inputRefs);
    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  return (
    <KeyboardAvoidingView style={Styles.container}>
      {/* <Text style={{color:"#fff", fontSize:"30"}}>Verification Code</Text> */}
      <View style={Styles.codeContainer}>
        <CodeTextBox inputRef={inputRefs[1]} handleTextChange={onTextChange} index={1} autoFocus={true} />
        <CodeTextBox inputRef={inputRefs[2]} handleTextChange={onTextChange} index={2} />
        <CodeTextBox inputRef={inputRefs[3]} handleTextChange={onTextChange} index={3} />
        <CodeTextBox inputRef={inputRefs[4]} handleTextChange={onTextChange} index={4} />
      </View>
    </KeyboardAvoidingView>
  );
};

const CodeTextBox = ({ autoFocus = false, inputRef, handleTextChange, index }) => {
  const [inputs, setInputs] = useState(Array(4).fill(""));

  const [containerColour, setContainerColour] = useState("#fff");

  return (
    <View style={[Styles.verificationView, { borderColor: containerColour }]}>
      <TextInput
        ref={inputRef}
        placeholderTextColor="grey"
        keyboardType="numeric"
        maxLength={1}
        textAlign="center"
        autoFocus={autoFocus}
        style={Styles.verificationTextInput}
        onChangeText={(o) => handleTextChange(o, index)}
      />
    </View>
  );
};
