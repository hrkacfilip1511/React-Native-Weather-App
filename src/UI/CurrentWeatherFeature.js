import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CurrentWeatherFeature = ({ iconName, text, color }) => {
  return (
    <View style={styles.featureContainer}>
      <Icon name={iconName} size={35} color={color} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  featureContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    marginTop: 7,
    fontSize: 18,
    color: "white",
  },
});
export default CurrentWeatherFeature;
