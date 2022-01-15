import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
