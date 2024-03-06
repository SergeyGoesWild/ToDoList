import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import data from "../components/DataMock";
import OneItem from "../components/OneItem";

function MainScreen() {
  const Item = ({ item }) => <OneItem itemObj={item} />;

  return (
    <View style={styles.ListContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={Item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 30,
  },
});

export default MainScreen;
