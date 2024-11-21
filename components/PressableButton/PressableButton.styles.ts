import { StyleSheet } from "react-native";
import { tokens } from "@/styles/tokens";

export const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.s,
    backgroundColor: tokens.palette.grey[100],
    borderRadius: tokens.spacing.s,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
