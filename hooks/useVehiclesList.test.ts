import { renderHook } from "@testing-library/react-hooks";
import { useVehiclesList } from "./useVehiclesList";

test("should fetch and return vehicle list", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useVehiclesList());

  await waitForNextUpdate();

  expect(result.current.list).toBeDefined();
  expect(result.current.list?.length).toBeGreaterThan(0);
});
