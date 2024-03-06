import React from "react";
import { Text, FlatList, View } from "react-native";
import data from "../components/DataMock";
import OneItem from "../components/OneItem";

function MainScreen() {
  const Item = ({ item }) => <OneItem itemObj={item} />;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={Item}
      />
    </View>
  );
}

export default MainScreen;
