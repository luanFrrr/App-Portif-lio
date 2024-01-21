import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import styles from "../Styles/MainScreenstyles";

export default function MainScreen({ navigation }: any) {
  const openLinkedInProfile = () => {
    Linking.openURL("https://www.linkedin.com/in/luan-fr");
  };

  const openGitHubProfile = () => {
    Linking.openURL("https://github.com/luanFrrr");
  };

  const sendEmail = () => {
    Linking.openURL("mailto:luanrosas@yahoo.com.br");
  };

  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require("../../assets/minha-foto.jpg")}
      />

      <Text style={styles.text}> Luan Ferreira Rosas </Text>

      <TouchableOpacity onPress={openLinkedInProfile}>
        <View style={styles.linkWithIcon}>
          <AntDesign name="linkedin-square" size={30} color="black" />
          <Text style={styles.linkText}> LinkedIn</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={openGitHubProfile}>
        <View style={styles.linkWithIcon}>
          <AntDesign name="github" size={30} color="black" />
          <Text style={styles.linkText}> GitGub</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={sendEmail}>
        <View style={styles.linkWithIcon}>
          <Entypo name="email" size={30} color="black" />
          <Text style={styles.linkText}> Email</Text>
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
