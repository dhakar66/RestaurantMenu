import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import MealList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryID;
  //   check whether the catID is present in the meals id array or not. go and check the data of meals.
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  //   this below useLayoutEffect is for the displa of individual vategory screens title.

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);
  return <MealList items={displayedMeals} />;
}
