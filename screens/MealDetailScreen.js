import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const FavoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  //   var mealIsFavorite = FavoriteMealsCtx["ids"] !== undefined;
  const mealIsFavorite = FavoriteMealsCtx.ids.includes(mealId);
  //   mealIsFavorite !== undefined;

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      FavoriteMealsCtx.removeFavorite(mealId);
    } else {
      FavoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
