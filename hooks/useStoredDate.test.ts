import { renderHook, act } from "@testing-library/react-hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStoredDate } from "./useStoredDate";

jest.mock("@react-native-async-storage/async-storage");

test("should load and save date correctly", async () => {
  const mockDate = new Date().toISOString();
  (AsyncStorage.getItem as jest.Mock).mockResolvedValue(mockDate);

  const { result, waitForNextUpdate } = renderHook(() => useStoredDate("1"));

  await waitForNextUpdate();

  expect(result.current.date.toISOString()).toBe(mockDate);

  const newDate = new Date();
  act(() => {
    result.current.handleDateChange(false, newDate);
  });

  expect(result.current.date).toBe(newDate);

  await act(async () => {
    await result.current.saveDate();
  });

  expect(AsyncStorage.setItem).toHaveBeenCalledWith(
    "selectedDate_1",
    newDate.toISOString()
  );
});
