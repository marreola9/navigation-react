import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStayle={"dark-content"} />
      <Text>Home screen</Text>
      <Button
        title="First Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "First Item",
            content: "First Item Content",
            stock: 1,
          })
        }
      />

      <Button
        title="Second Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Second Item",
            content: "Second Item Content",
            stock: 0,
          })
        }
      />

      <Button
        title="Third Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Third Item",
            content: "Third Item Content",
            stock: 200,
          })
        }
      />
    </View>
  );
}
