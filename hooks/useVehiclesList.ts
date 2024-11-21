import { useState, useEffect } from "react";
import { MotorbikesList } from "@/types/types";

export const useVehiclesList = () => {
  const [list, setList] = useState<MotorbikesList | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch("https://fake.prod.mapit.me/motos");
        const data = await response.json();
        setList(data);
      } catch (error: any) {
        setError("Error: " + error.message);
      }
    };

    fetchList();
  }, []);

  return { list, error };
};
