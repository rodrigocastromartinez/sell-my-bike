import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MotorbikeDetails } from "../../types/types";
import { useVehicleMap } from "@/hooks/useVehicleMap";
import { styles } from "./VehicleMap.styles";

interface VehicleMapProps {
  vehicleDetails: MotorbikeDetails;
}

export default function VehicleMap({ vehicleDetails }: VehicleMapProps) {
  const { initialRegion, coordinate } = useVehicleMap(vehicleDetails);

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={coordinate} />
      </MapView>
    </View>
  );
}
