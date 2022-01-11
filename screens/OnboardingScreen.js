import React from "react";
import Onboarding from "react-native-onboarding-swiper";

import { Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const win = Dimensions.get("window");
const ratio = win.width / 600;

// const SkipButton = () => {};
// const NextButton = () => {};
// const DoneButton = () => {};
// const DotsIndicator = () => {};

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.replace("Login")}
      onSkip={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/onboarding1.png")}
              resizeMode={"contain"}
              style={styles.image}
            />
          ),
          title: "Connect with the World",
          subtitle: "A New Way To Connect With People",
        },
        {
          backgroundColor: "#fff",

          image: (
            <Image
              source={require("../assets/images/onboarding2.png")}
              resizeMode={"contain"}
              style={styles.image}
            />
          ),
          title: "Be where the world is going",
          subtitle: "Share Your Thoughts With Similar Kind Of People",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/onboarding3.png")}
              resizeMode={"contain"}
              style={styles.image}
            />
          ),
          title: "We are ready to serve you differently",
          subtitle: "The best time for connecting with socido is today",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: win.width,
    height: 600 * ratio,
  },
});
