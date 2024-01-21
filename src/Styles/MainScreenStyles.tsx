import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    marginTop: 60,
    borderRadius: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 2,
    marginBottom: 50,
  },

  linkWithIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  linkText: {
    borderWidth: 2,
    borderRadius: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    marginVertical: 11,
    marginHorizontal: 10,
    width: "50%",
  },
});

export default styles;
