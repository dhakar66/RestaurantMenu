import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "./MealItem";

function MealList({ items }) {
  //   function to render the meal item
  function renderMealItem({ item }) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
    // use the below command in case if there is some rendering issue.
    // return MealItem(item.title);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
