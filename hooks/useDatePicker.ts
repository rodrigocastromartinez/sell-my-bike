import { useState } from "react";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export const useDatePicker = (initialDate: Date = new Date()) => {
  const [date, setDate] = useState(initialDate);

  const handleDateChange = (
    e: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || new Date();
    setDate(currentDate);
  };

  return { date, handleDateChange };
};
