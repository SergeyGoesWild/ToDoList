import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
} from "react-native";
import data from "../components/DataMock";
import OneItem from "../components/OneItem";
import Icon from "react-native-vector-icons/FontAwesome";

function MainScreen() {
  const RenderItem = ({ item }) => <OneItem itemObj={item} />;
  const [itemsData, setItemsData] = useState(data);

  const handleDataChange = (newValue) => {
    setItemsData(newValue);
  };

  const handlePlusClick = () => {
    const newItem = {
      id: new Date().getTime(),
      title: "Code!!!",
      priority: "",
      description: "Filler text",
      done: false,
    };
    const newValue = [newItem, ...itemsData];
    handleDataChange(newValue);
  };

  return (
    <>
      <View style={styles.ListContainer}>
        <FlatList
          data={itemsData}
          keyExtractor={(item) => item.id}
          renderItem={RenderItem}
        />
      </View>

      <TouchableOpacity onPress={handlePlusClick} style={styles.PlusButton}>
        <Icon name="plus" size={35} color="white" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 30,
  },
  PlusButton: {
    position: "absolute",
    top: 650,
    right: 30,
    backgroundColor: "#ef709d",
    padding: 15,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default MainScreen;
