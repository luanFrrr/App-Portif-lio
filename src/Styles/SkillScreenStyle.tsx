import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 100,
    borderRadius: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 2,
    marginBottom: 50,
  },
  skillsContainer: {
    alignSelf: "center",
    paddingRight: 100,
    justifyContent: "center",
  },
  skillItem: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 80,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
    padding: 8,
    width: "60%",
    color: "green",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default styles;
