import React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MyIcon = ({ iconName, clickHandler }) => {
  let name;
  switch (iconName) {
    case "Partly cloudy":
      name = "weather-partly-cloudy";
      break;
    // case default:
    // break;
  }
  return (
    <Pressable onPress={clickHandler}>
      <Icon name={name} size={60} color={"white"} />
    </Pressable>
  );
};

export default MyIcon;
