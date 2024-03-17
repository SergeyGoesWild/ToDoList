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
  const [tasksToDo, setTasksToDo] = useState(data);

  const handleToDoChange = (newValue) => {
    setTasksToDo(newValue);
  };

  const addTask = () => {
    const newItem = {
      id: new Date().getTime(),
      title: "",
      priority: "",
      description: "",
      done: false,
    };
    const newValue = [newItem, ...tasksToDo];
    handleToDoChange(newValue);
  };

  const removeTask = (task) => {
    const indexToRemove = tasksToDo.findIndex((item) => item.id === task.id);
    const newToDo = tasksToDo
      .slice(0, indexToRemove)
      .concat(tasksToDo.slice(indexToRemove + 1));
    handleToDoChange(newToDo);
  };

  const updateTask = (task) => {
    const indexToUpdate = tasksToDo.findIndex((item) => item.id === task.id);
    const newToDo = tasksToDo
      .slice(0, indexToUpdate)
      .concat([task])
      .concat(tasksToDo.slice(indexToUpdate + 1));
    handleToDoChange(newToDo);
  };

  const setTaskDone = (task) => {
    task.done = true;
    updateTask(task);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.ListContainer}>
        <FlatList
          data={tasksToDo.filter((item) => item.done != true)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OneItem
              itemObj={item}
              onDeleteButtonPress={() => {
                removeTask(item);
              }}
              onCheckboxPress={() => {
                setTaskDone(item);
              }}
              onSubmit={() => {
                updateTask(item);
              }}
            />
          )}
        />
      </View>

      <TouchableOpacity onPress={addTask} style={styles.PlusButton}>
        <Icon name="plus" size={35} color="white" />
      </TouchableOpacity>
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

export default MainScreen;
