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
  const [tasksDone, setTasksDone] = useState([]);

  const handleToDoChange = (newValue) => {
    setTasksToDo(newValue);
  };
  const handleDoneChange = (newValue) => {
    setTasksDone(newValue);
  };
  const RenderItem = ({ item }) => (
    <OneItem itemObj={item} removeTask={removeTask} />
  );

  const addTask = () => {
    const newItem = {
      id: new Date().getTime(),
      title: "Code!!!",
      priority: "",
      description: "Filler text",
      done: false,
    };
    const newValue = [newItem, ...tasksToDo];
    handleToDoChange(newValue);
  };

  const removeTask = (id) => {
    const indexToRemove = tasksToDo.findIndex((item) => item.id === id);
    const taskToRemove = tasksToDo[indexToRemove];
    const newToDo = tasksToDo
      .slice(0, indexToRemove)
      .concat(tasksToDo.slice(indexToRemove + 1));
    handleToDoChange(newToDo);
    const newDone = [taskToRemove, ...tasksDone];
    handleDoneChange(newDone);
  };

  return (
    <>
      <View style={styles.ListContainer}>
        <FlatList
          data={tasksToDo}
          keyExtractor={(item) => item.id}
          renderItem={RenderItem}
        />
      </View>

      <TouchableOpacity onPress={addTask} style={styles.PlusButton}>
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
