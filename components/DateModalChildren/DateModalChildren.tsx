import { useState } from "react";
import { View, Text } from "react-native";
import PressableButton from "../PressableButton/PressableButton";
import { styles } from "./DateModalChildren.styles";

interface DateModalChildrenProps {
  hide: () => void;
  pickedDate: Date;
}

export default function DateModalChildren({
  hide,
  pickedDate,
}: DateModalChildrenProps) {
  return (
    <View style={styles.container}>
      <Text>Your appointment is on:</Text>
      <Text>
        {pickedDate.getDate()}/{pickedDate.getMonth()}/
        {pickedDate.getFullYear()}
      </Text>
      <PressableButton text='Ok' onPress={() => hide()} />
    </View>
  );
}
