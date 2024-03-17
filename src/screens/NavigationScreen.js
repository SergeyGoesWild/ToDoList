import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainScreen from "./MainScreen";
import DoneScreen from "./DoneScreen";
import data from "../components/DataMock";

function NavigationScreen() {
  const tabs = createMaterialTopTabNavigator();

  const [tasks, setTasks] = useState(data);

  const handleTasksChange = (newValue) => {
    setTasks(newValue);
  };

  return (
    <NavigationContainer>
      <tabs.Navigator style={{ backgroundColor: "blue" }}>
        <tabs.Screen
          name="Tasks To Do"
          component={MainScreen}
          initialParams={{ tasks, handleTasksChange }}
        />
        <tabs.Screen
          name="Tasks Done"
          component={DoneScreen}
          initialParams={{ tasks, handleTasksChange }}
        />
      </tabs.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
