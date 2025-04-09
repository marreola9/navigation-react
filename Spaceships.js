import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import { fetchData } from "./api";

export default function SpaceshipsTab() {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("starships")
      .then(setShips)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" color="dodgerblue" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={ships}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}
