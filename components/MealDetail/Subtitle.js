import { StyleSheet, View, Text } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b476",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 5,
    borderBlockColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
