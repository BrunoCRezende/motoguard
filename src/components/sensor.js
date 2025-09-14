import React, { useState } from "react";
import { Image, StyleSheet, Pressable } from "react-native";

export default function Sensor({ width = 100, height = 40 }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Image
        source={require("../../assets/Vector.png")}
        style={[
          styles.box,
          { width, height, tintColor: isPressed ? "#DA4F4F" : undefined },
        ]}
        resizeMode="stretch"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 0.2,
  },
});
