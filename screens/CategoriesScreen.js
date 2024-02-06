import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View } from "react-native";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryID: item.id });
    }
    return CategoryGridTile(item.title, item.color, pressHandler);
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
