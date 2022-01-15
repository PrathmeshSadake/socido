import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { windowHeight } from "../utils/Dimensions";

const FormButton = ({ buttonText, ...rest }) => (
  <TouchableOpacity style={styles.button}>
    <Text
      style={{
        textAlign: "center",
        color: "white",
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: "600",
      }}
    >
      Login
    </Text>
  </TouchableOpacity>
);

export default FormButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    backgroundColor: "#8000FF",
  },
});
