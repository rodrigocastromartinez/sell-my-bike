import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useMotorbikeDetails } from "@/hooks/useMotorbikeDetails";
import VerticalContainer from "../Containers/VerticalContainer";
import FetchingError from "../ErrorMessages/FetchingError";
import { tokens } from "@/styles/tokens";
import { RootStackParamList } from "@/types/types";
import { styles } from "./Card.styles";

interface CardProps {
  id: string;
}

export default function Card({ id }: CardProps) {
  const { details } = useMotorbikeDetails(id);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (details) {
      navigation.navigate("details", { details });
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        {details && (
          <VerticalContainer padding={tokens.spacing.m}>
            <Text style={styles.title}>{details.nombre}</Text>
            <Text>ID: {details.id}</Text>
            <Text>MODEL: {details.modelo}</Text>
          </VerticalContainer>
        )}
        {!details && <FetchingError />}
      </View>
    </Pressable>
  );
}
