import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStoredDate = (id: string | undefined) => {
  const [date, setDate] = useState(new Date());
  const DATE_KEY = `selectedDate_${id}`;

  useEffect(() => {
    const loadDate = async () => {
      const storedDate = await AsyncStorage.getItem(DATE_KEY);
      if (storedDate) {
        setDate(new Date(storedDate));
      }
    };
    loadDate();
  }, [DATE_KEY]);

  const handleDateChange = (e: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || new Date();
    setDate(currentDate);
  };

  const saveDate = async () => {
    await AsyncStorage.setItem(DATE_KEY, date.toISOString());
  };

  return { date, handleDateChange, saveDate };
};
