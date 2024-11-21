import { tokens } from "@/styles/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: tokens.spacing.l,
    gap: tokens.spacing.m,
    backgroundColor: tokens.palette.grey[500],
  },
});
