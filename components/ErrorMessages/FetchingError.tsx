import { Text, View, StyleSheet } from "react-native";
import { tokens } from "@/styles/tokens";

export default function FetchingError() {
  return (
    <View style={styles.errorContainer}>
      <Text>Error fetching data</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    display: "flex",
    padding: tokens.spacing.m,
    justifyContent: "center",
    alignItems: "center",
  },
});
