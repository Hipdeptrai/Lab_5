import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

const DetailScreen = ({ route, navigation }) => {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Detail</Text>
      <Text style={styles.text}>
        Hi {userName || "you"}, This is Detail Screen
      </Text>

      {/* Nút 1: Quay lại bằng goBack */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>⬅ Back</Text>
      </TouchableOpacity>

      {/* Nút 2: Reset navigation stack */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          )
        }
      >
        <Text style={styles.buttonText}>🔄 Reset Stack (reset)</Text>
      </TouchableOpacity>

      {/* Nút 3: Pop 1 màn hình khỏi Stack */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <Text style={styles.buttonText}>🔙 Back Pop screen</Text>
      </TouchableOpacity>

      {/* Nút 4: Trở về màn hình đầu tiên */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>🏠 Back to HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2A1E17", // Màu nền nâu đậm
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF8C00", // Màu cam nổi bật
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: "#D9B99B", // Màu chữ nâu nhạt hơn để tạo sự hài hòa
    textAlign: "center",
  },
  button: {
    backgroundColor: "#A45C40", // Màu nâu cam đậm hơn một chút
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});


export default DetailScreen;
