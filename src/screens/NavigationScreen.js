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
        <tabs.Screen name="Tasks To Do" component={MainScreen} />
        <tabs.Screen name="Tasks Done" component={DoneScreen} />
      </tabs.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
