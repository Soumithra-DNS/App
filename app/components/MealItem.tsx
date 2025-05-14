import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";

type Props = {
  meal: {
    strCategoryThumb: string;
    strCategory: string;
    strCategoryDescription: string;
  };
  onPress: () => void;
};

export default function MealItem({ meal, onPress }: Props) {
  if (!meal) return null;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={{ uri: meal.strCategoryThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{meal.strCategory}</Text>
        <Text numberOfLines={2} style={styles.desc}>
          {meal.strCategoryDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
});
