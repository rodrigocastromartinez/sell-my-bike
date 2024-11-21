import { Pressable, Text } from "react-native";
import { styles } from "./PressableButton.styles";

interface PressableButtonProps {
  text: string;
  onPress: () => void;
}

export default function PressableButton({
  text,
  onPress,
}: PressableButtonProps) {
  return (
    <>
      <Pressable style={styles.container} onPress={onPress}>
        <Text>{text}</Text>
      </Pressable>
    </>
  );
}
