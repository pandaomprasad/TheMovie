import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../Theme/theme";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>The Movie</Text>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Feather name="cast" size={27} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={27} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-sharp" size={27} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.padd.medium,
  },
  logo: {
    color: theme.colors.white,
    fontSize: theme.fontsize.xl,
    fontWeight: "800",
  },
  menu: {
    flexDirection: "row",
    gap: theme.gap.medium,
  },
});
