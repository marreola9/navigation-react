import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import { fetchData } from "./api";

export default function Films() {
  const [Films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("films")
      .then(setFilms)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" color="dodgerblue" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={Films}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}
