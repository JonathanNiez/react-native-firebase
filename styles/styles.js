import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputBox: {
    width: "70%",
    fontSize: 16,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "#5f5f5f",
    borderWidth: 1,
    borderRadius: 10,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#007bff",
    borderRadius: 12,
    paddingVertical: 5,
  },
  btnLabel: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  logoutBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default styles;
