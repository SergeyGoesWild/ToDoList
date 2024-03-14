import React, { useState } from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  OneItemContainer: {
    flex: 1,
    alignItems: "center",
  },
  TitleContainer: {
    backgroundColor: "#3772ff",
    height: 60,
    marginVertical: 8,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    width: "100%",
  },
  ButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  OneItemText: {
    color: "white",
    fontSize: 18,
  },
  DescriptionText: {
    height: 90,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 20,
    width: "90%",
    color: "black",
    marginTop: 3,
    paddingTop: 8,
  },
  CheckBlock: {
    paddingLeft: 5,
  },
  inputTitle: {
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 0,
    paddingHorizontal: 20,
    color: "#fff",
  },
  inputDetails: {
    height: 90,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 20,
    width: "90%",
    marginTop: 3,
    paddingTop: 8,
    justifyContent: "flex-start",
  },
  BinButton: {
    backgroundColor: "#ff683b",
    marginTop: 10,
    marginBottom: 5,
    width: 130,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
  },
  EditButton: {
    backgroundColor: "#6fc961",
    marginTop: 10,
    marginBottom: 5,
    width: 130,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
  },
  ChevronUp: {
    transform: [{ rotate: "180deg" }],
  },
  ChevronDown: {
    transform: [{ rotate: "0deg" }],
  },
});
