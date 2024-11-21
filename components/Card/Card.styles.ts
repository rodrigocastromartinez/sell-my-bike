import { StyleSheet } from "react-native";
import { tokens } from "@/styles/tokens";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.palette.grey[500],
    marginVertical: tokens.spacing.s,
    borderRadius: tokens.spacing.xs,
  },
  title: {
    alignSelf: "flex-end",
    fontSize: tokens.spacing.l,
  },
});
