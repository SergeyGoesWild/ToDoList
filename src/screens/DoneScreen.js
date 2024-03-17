import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import data from "../components/DataMock";
import OneItemDone from "../components/OneItemDone";

function DoneScreen() {
  const [tasksToDo, setTasksToDo] = useState(data);

  const handleToDoChange = (newValue) => {
    setTasksToDo(newValue);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ListContainer}>
        <FlatList
          data={tasksToDo.filter((item) => item.done != false)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OneItemDone
              itemObj={item}
              onDeleteButtonPress={() => {
                console.log("***");
              }}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#f2f2ff",
  },
  ListContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 20,
  },
  PlusButton: {
    position: "absolute",
    top: 560,
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

export default DoneScreen;
