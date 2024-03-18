import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainScreen from "./MainScreen";
import DoneScreen from "./DoneScreen";
import { ContextProvider } from "../components/ContextProvider";

const tabs = createMaterialTopTabNavigator();

function NavigationScreen() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <tabs.Navigator style={{ backgroundColor: "blue" }}>
          <tabs.Screen name="Tasks To Do" component={MainScreen} />
          <tabs.Screen name="Tasks Done" component={DoneScreen} />
        </tabs.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default NavigationScreen;
