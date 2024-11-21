import { View, Text, StyleSheet } from "react-native";
import { tokens } from "@/styles/tokens";

interface DetailsHeaderProps {
  name: string;
}

export default function DetailsHeader({ name }: DetailsHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.m,
  },
  title: {
    fontSize: tokens.spacing.l,
    fontWeight: "600",
  },
});
