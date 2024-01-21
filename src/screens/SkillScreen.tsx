import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "../Styles/SkillScreenStyle";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function SkillScreen() {
  const whatsappNumber = "+5579999122876";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const openWhatsAppChat = () => {
    Linking.openURL(whatsappLink);
  };

  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require("../../assets/minha-foto.jpg")}
      />
      <Text style={styles.text}>Minhas Habilidades ⚛️</Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skillItem}>
          <AntDesign name="HTML" size={30} color="black" /> HTML ⭐⭐⭐⭐⭐
        </Text>
        <Text style={styles.skillItem}>
          <FontAwesome name="css3" size={30} color="black" /> CSS ⭐⭐⭐⭐
        </Text>
        <Text style={styles.skillItem}>
          <MaterialCommunityIcons
            name="language-typescript"
            size={24}
            color="black"
          />{" "}
          Typescript ⭐⭐⭐⭐
        </Text>
        <Text style={styles.skillItem}>
          <FontAwesome5 name="react" size={30} color="black" /> React ⭐⭐⭐⭐
        </Text>
        <Text style={styles.skillItem}>
          <FontAwesome5 name="node-js" size={30} color="black" /> Node JS
          ⭐⭐⭐⭐
        </Text>
        <Text style={styles.skillItem}>
          <AntDesign name="mobile1" size={30} color="black" /> React Native
          ⭐⭐⭐⭐
        </Text>
      </View>

      <TouchableOpacity style={styles.linkContainer} onPress={openWhatsAppChat}>
        <Text style={styles.link}> 📩 Fala Comigo (WhatsApp)</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
