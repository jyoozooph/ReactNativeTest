import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#060f1c",
  },
  logo: {
    width: "50%",
    height: 250,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    height: 50,
    marginBottom: 20,
    // borderColor: "blue",
    // borderWidth: 2,
    justifyContent: "center",
  },
  textInput:{
    color: 'white',
    fontSize: 17,
    flex: 1,
    marginLeft: 20
  },   
  inputUnderline: {
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 2,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fcba03",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
  },
});
