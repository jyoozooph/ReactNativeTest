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
  verificationView: {
    display: "flex",
    borderWidth: "2",
    borderRadius: "6",
    width: "18%",
    height: 125,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  verificationTextInput: {
    color: "#fff",
    height: "100%",
    fontSize: 50,
  },
  codeContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
});
