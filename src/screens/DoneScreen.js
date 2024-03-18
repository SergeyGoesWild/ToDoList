import React, { useState, useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import OneItemDone from "../components/OneItemDone";
import { contextObj } from "../components/ContextProvider";

function DoneScreen() {
  const { tasks, handleTasksChange } = useContext(contextObj);

  const removeTask = (task) => {
    const indexToRemove = tasks.findIndex((item) => item.id === task.id);
    const newToDo = tasks
      .slice(0, indexToRemove)
      .concat(tasks.slice(indexToRemove + 1));
    handleTasksChange(newToDo);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ListContainer}>
        <FlatList
          data={tasks.filter((item) => item.done != false)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OneItemDone itemObj={item} />}
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
