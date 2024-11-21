import { useMemo } from "react";
import { MotorbikeDetails } from "../types/types";

export const useVehicleMap = (vehicleDetails: MotorbikeDetails) => {
  const initialRegion = useMemo(
    () => ({
      latitude: vehicleDetails.coordenadas.latitud,
      longitude: vehicleDetails.coordenadas.longitud,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }),
    [vehicleDetails]
  );

  const coordinate = useMemo(
    () => ({
      latitude: vehicleDetails.coordenadas.latitud,
      longitude: vehicleDetails.coordenadas.longitud,
    }),
    [vehicleDetails]
  );

  return { initialRegion, coordinate };
};
