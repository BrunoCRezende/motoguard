import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import Button from "../components/button";
import DeviceCard from "../components/device";
import Header from "../components/header";
import Sensor from "../components/sensor";

// Tipagem do seu stack de navegação (substitua 'RootStackParamList' pelo seu tipo real)
type RootStackParamList = {
  addDevice: undefined;
};

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Header title="MotoGuard" />
      
      {/* Conteúdo central */}
      <View style={styles.content}>
        <Image
          source={require("../../assets/frontViewBike.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Sensor width={150} height={35} />
        <Sensor width={200} height={45} />
        <Sensor width={250} height={55} />
      </View>

      {/* Rodapé com botões */}
      <View style={styles.footer}>
        <View style={styles.align}>
          <Text style={styles.text}>Dispositivos Ativos:</Text>
        </View>
        <DeviceCard
          imageSource={require("../../assets/moto.png") as ImageSourcePropType}
          title="Dispositivo capacete"
          description="Lorem ipsum dolor sit amet, consectetur."
        />
        <Button
          title="Adicionar Dispositivos"
          type="secondary"
          onPress={() => navigation.navigate("addDevice")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // fundo escuro
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
  },
  footer: {
    marginTop: "auto", // garante que fique no fim da tela
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 149,
    height: 137,
    marginBottom: 20,
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },
  align: {
    width: "100%",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
});
