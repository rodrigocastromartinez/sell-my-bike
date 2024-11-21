import { View, Text, StyleSheet } from "react-native";
import { tokens } from "@/styles/tokens";

export default function HomeHeader() {
  return (
    <View>
      <Text style={styles.title}>My vehicles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: tokens.spacing.l,
  },
});
