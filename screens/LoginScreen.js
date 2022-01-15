import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from "react-native";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

import Icon from "../assets/images/logo.js";

const win = Dimensions.get("window");
const ratio = win.width / 600;

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
      <View>
        <TextInput style={styles.formInput} placeholder="Email" />
        <FormInput placeholder={"Email"} name={"mail"} />
        <FormInput placeholder={"Password"} name={"key"} />
        <FormButton />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  formInput: {
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2",
    borderColor: "gray",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: -20,
  },
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "flex-start",
  },
  image: {
    width: win.width / 2,
    height: 500 * ratio,
  },
});
