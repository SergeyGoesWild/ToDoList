import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainScreen from "./MainScreen";
import DoneScreen from "./DoneScreen";

function NavigationScreen() {
  const tabs = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <tabs.Navigator style={{ backgroundColor: "blue" }}>
        <tabs.Screen
          name="Tasks To Do"
          component={MainScreen}
          initialParams={{ prop1: "value1", prop2: "value2" }}
        />
        <tabs.Screen
          name="Tasks Done"
          component={DoneScreen}
          initialParams={{ prop1: "value1", prop2: "value2" }}
        />
      </tabs.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
