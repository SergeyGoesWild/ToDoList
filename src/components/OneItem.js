import React from "react";
import { Text } from "react-native";

function OneItem({ itemObj }) {
  return <Text>{itemObj.title}</Text>;
}

export default OneItem;
