import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/OneItem.styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ChevronIcon from "react-native-vector-icons/Entypo";
import BinIcon from "react-native-vector-icons/FontAwesome6";
import EditIcon from "react-native-vector-icons/Feather";

function OneItem({ itemObj, removeTask, updateTask }) {
  const [inputTitle, setInputText] = useState("");
  const [inputDetails, setInputDetails] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [inputVal, setInputVal] = useState(true);

  const handleInputTitleChange = (newValue) => {
    setInputText(newValue);
  };
  const handleInputDetailsChange = (newValue) => {
    setInputDetails(newValue);
  };
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.OneItemContainer}>
        <View style={styles.TitleContainer}>
          {!(itemObj.title != "") && (
            <TextInput
              style={styles.inputTitle}
              placeholder="Enter the title here"
              placeholderTextColor={"#dbdbdb"}
              onChangeText={handleInputTitleChange}
              value={inputTitle}
              selectionColor={"white"}
              onSubmitEditing={() => {
                itemObj.title = inputTitle;
                console.log(itemObj);
                updateTask(itemObj);
              }}
            />
          )}
          {itemObj.title != "" && (
            <BouncyCheckbox
              size={20}
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
          )}
          <ChevronIcon name="chevron-down" size={25} color="white" />
        </View>
        {showDetails && (
          <>
            <TextInput
              style={styles.inputDetails}
              placeholder="Enter details here (optional)"
              onChangeText={handleInputDetailsChange}
              value={inputDetails}
            />
            <View style={styles.ButtonContainer}>
              <TouchableOpacity style={styles.EditButton}>
                <EditIcon name="edit-3" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.BinButton}>
                <BinIcon name="trash-can" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default OneItem;
