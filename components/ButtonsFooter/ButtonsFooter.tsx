import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PressableButton from "../PressableButton/PressableButton";
import { styles } from "./ButtonsFooter.styles";
import { CustomModalHandler } from "../CustomModal/CustomModal";

interface ButtonsFooterProps {
  onPressSetDate: () => void;
}

export default function ButtonsFooter({ onPressSetDate }: ButtonsFooterProps) {
  const navigation = useNavigation();

  const handlePressBack = () => {
    navigation.goBack();
  };

  const handlePressDate = () => {
    onPressSetDate();
  };

  return (
    <View style={styles.container}>
      <PressableButton
        text='Go Back'
        onPress={handlePressBack}
      ></PressableButton>
      <PressableButton
        text='Set Date'
        onPress={handlePressDate}
      ></PressableButton>
    </View>
  );
}
