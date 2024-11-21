import { Text } from "react-native";
import { calculateResaleValue } from "@/utils/price-utils";
import { MotorbikeDetails } from "../../types/types";
import { styles } from "./DetailsFooter.styles";

interface DetailsFooterProps {
  details: MotorbikeDetails;
}

export default function DetailsFooter({ details }: DetailsFooterProps) {
  return (
    <>
      <Text style={styles.text}>Model: {details.modelo}</Text>
      <Text style={styles.text}>
        Resale value:{" "}
        {calculateResaleValue(
          details.precioCompra,
          details.fechaCompra
        ).toFixed(2)}{" "}
        €
      </Text>
    </>
  );
}
