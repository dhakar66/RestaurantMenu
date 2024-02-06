import { StyleSheet, View, Text } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavouritesScreen() {
  const FavoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    FavoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={Styles.rootContainer}>
        <Text style={Styles.textContainer}>
          You Have no favorites meals yet!!
        </Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
}

export default FavouritesScreen;

const Styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
