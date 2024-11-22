import { renderHook } from "@testing-library/react-hooks";
import { useMotorbikeDetails } from "./useMotorbikeDetails";
import { MotorbikeDetails } from "@/types/types";

const mockMotorbikeDetails: MotorbikeDetails = {
  id: "1",
  fechaCompra: "2020-01-01",
  precioCompra: 5000,
  modelo: "Model X",
  nombre: "Moto X",
  coordenadas: {
    latitud: 40.7128,
    longitud: -74.006,
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockMotorbikeDetails),
  })
) as jest.Mock;

test("should fetch and return motorbike details", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useMotorbikeDetails("1")
  );

  await waitForNextUpdate();

  expect(result.current.details).toBeDefined();
  expect(result.current.details?.id).toBe("1");
  expect(result.current.details?.nombre).toBe("Moto X");
  expect(result.current.error).toBeNull();
});

test("should handle fetch error", async () => {
  (fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.reject(new Error("API is down"))
  );

  const { result, waitForNextUpdate } = renderHook(() =>
    useMotorbikeDetails("1")
  );

  await waitForNextUpdate();

  expect(result.current.details).toBeNull();
  expect(result.current.error).toBe("Error: API is down");
});
