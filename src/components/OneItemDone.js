import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/OneItemDone.styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ChevronIcon from "react-native-vector-icons/Entypo";
import BinIcon from "react-native-vector-icons/FontAwesome6";

function OneItemDone({ itemObj }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={styles.OneItemContainer}>
        <View style={styles.TitleContainer} pointerEvents="none">
          <BouncyCheckbox
            size={20}
            isChecked={true}
            fillColor="pink"
            unfillColor="#FFFFFF"
            text={itemObj.title}
            //iconStyle={{ borderColor: "red" }}
            //innerIconStyle={{ borderWidth: 2 }}
            textStyle={styles.OneItemText}
            style={styles.CheckBlock}
            onPress={() => {
              this.isChecked = true;
            }}
          />

          <ChevronIcon
            name="chevron-down"
            size={25}
            color="white"
            style={showDetails ? styles.ChevronUp : styles.ChevronDown}
          />
        </View>
        {showDetails && (
          <>
            <Text style={styles.DescriptionText}>{itemObj.description}</Text>
            <View style={styles.ButtonContainer}>
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

export default OneItemDone;
