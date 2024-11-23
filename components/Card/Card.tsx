import { View, Text, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import VerticalContainer from "../Containers/VerticalContainer";
import FetchingError from "../ErrorMessages/FetchingError";
import { tokens } from "@/styles/tokens";
import { MotorbikeDetails, RootStackParamList } from "@/types/types";
import { styles } from "./Card.styles";

interface CardProps {
  details: MotorbikeDetails;
}

export default function Card({ details }: CardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (details.id) {
      navigation.navigate("details", { id: details.id });
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        {details.id && (
          <VerticalContainer padding={tokens.spacing.m}>
            <Text style={styles.title}>{details.nombre}</Text>
            <Text>ID: {details.id}</Text>
            <Text>MODEL: {details.modelo ?? "-"}</Text>
          </VerticalContainer>
        )}
        {!details.id && <FetchingError />}
      </View>
    </Pressable>
  );
}
