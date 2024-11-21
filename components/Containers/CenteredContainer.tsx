import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface CenteredContainerProps {
  padding?: number;
  gap?: number;
  children: ReactNode;
}

export default function CenteredContainer({
  padding,
  gap,
  children,
}: CenteredContainerProps) {
  return (
    <>
      <View style={[styles.container, { padding: padding, gap: gap }]}>
        {children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
