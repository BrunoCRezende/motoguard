import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DeviceCard({ imageSource, title, description }) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 6,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#333",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "light",
    marginBottom: 4,
  },
  description: {
    color: "#fff",
    fontWeight: "light",
    fontSize: 16,
  },
});
