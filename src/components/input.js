import { View, TextInput, Text, StyleSheet } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  secureTextEntry = false,
  mask, // ➝ nova prop opcional
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      {mask ? (
        <MaskedTextInput
          mask={mask}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#555"
          keyboardType={keyboardType}
        />
      ) : (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#555"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 30,
  },
  label: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#333",
    fontSize: 20,
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
