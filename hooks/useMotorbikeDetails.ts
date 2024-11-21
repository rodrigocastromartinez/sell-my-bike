import { useState, useEffect } from "react";
import { MotorbikeDetails } from "@/types/types";

export const useMotorbikeDetails = (id: string) => {
  const [details, setDetails] = useState<MotorbikeDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://fake.prod.mapit.me/motos/${id}`);
        const data = await response.json();
        setDetails(data);
      } catch (error: any) {
        setError("Error: " + error.message);
      }
    };

    fetchDetails();
  }, [id]);

  return { details, error };
};
