import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏡 Home</Text>
      <Text style={styles.text}>Welcome! This is Home Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Input your name..."
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Detail", { userName: name })}
      >
        <Text style={styles.buttonText}>See details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E", // Màu nền tối
    padding: 20,
  },
  drawerButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#3A3A3A", // Màu xám đậm
    padding: 10,
    borderRadius: 10,
  },
  drawerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#B0B0B0", // Màu xám nhạt hơn để nổi bật
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: "#D0D0D0", // Màu chữ xám sáng
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    borderColor: "#3A3A3A", // Màu viền xám đậm
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#2A2A2A", // Màu nền input tối
    fontSize: 16,
    color: "#fff", // Màu chữ trắng để dễ đọc
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3A3A3A", // Màu xám đậm
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default HomeScreen;
