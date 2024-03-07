import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function OneItem({ itemObj, removeTask }) {
  return (
    <View style={styles.OneItemContainer}>
      <BouncyCheckbox
        size={30}
        fillColor="pink"
        unfillColor="#FFFFFF"
        text={itemObj.title}
        //iconStyle={{ borderColor: "red" }}
        //innerIconStyle={{ borderWidth: 2 }}
        textStyle={styles.OneItemText}
        onPress={() => {
          setTimeout(function () {
            removeTask(itemObj.id);
          }, 1000);
        }}
        style={styles.CheckBlock}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  OneItemContainer: {
    backgroundColor: "#3772ff",
    height: 60,
    marginVertical: 8,
    borderRadius: 20,
    justifyContent: "center",
  },
  OneItemText: {
    color: "white",
    fontSize: 18,
  },
  CheckBlock: {
    paddingLeft: 20,
  },
});

export default OneItem;
