import { useState, useEffect } from "react";
import { MotorbikesList } from "@/types/types";

export const useVehiclesList = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [list, setList] = useState<MotorbikesList | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchList = async () => {
    setRefreshing(true);
    try {
      const response = await fetch("https://fake.prod.mapit.me/motos");
      const data = await response.json();
      setList(data);
    } catch (error: any) {
      setError("Error: " + error.message);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { list, refreshing, fetchList, error };
};
