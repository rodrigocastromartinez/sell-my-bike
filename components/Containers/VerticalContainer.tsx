import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface VerticalContainerProps {
  padding: number;
  children: ReactNode;
}

export default function VerticalContainer({
  padding,
  children,
}: VerticalContainerProps) {
  return (
    <>
      <View style={[styles.container, { padding: padding }]}>{children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
