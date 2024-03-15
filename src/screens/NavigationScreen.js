import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainScreen from "./MainScreen";
import DoneScreen from "./DoneScreen";
const tabs = createMaterialTopTabNavigator();

function NavigationScreen() {
  return (
    <tabs.Navigator>
      <tabs.Screen name="Tasks To Do" component={MainScreen} />
      <tabs.Screen name="Tasks Done" component={DoneScreen} />
    </tabs.Navigator>
  );
}

export default NavigationScreen;
