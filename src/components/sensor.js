import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Sensor({ width = 100, height = 40 }) {
  return (
    <Image
      source={require("../../assets/Vector.png")}
      style={[styles.box, { width, height }]}
      resizeMode="stretch" // força a imagem a preencher exatamente
    />
  );
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 0.2,
  },
});
