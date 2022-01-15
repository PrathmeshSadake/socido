import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { windowWidth } from "../utils/Dimensions";

const FormInput = ({ placeholder, name }) => {
  const [text, setText] = React.useState("");

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.inputField}
        right={
          <TextInput.Icon
            name={<Ionicons name={name} size={32} color="black" />}
          />
        }
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
});
