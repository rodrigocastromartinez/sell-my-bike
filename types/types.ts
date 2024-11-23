export type RootStackParamList = {
  home: undefined;
  details: { id: string };
};

export type MotorbikeDetails = {
  id: string;
  fechaCompra: string;
  precioCompra: number;
  modelo: string;
  nombre: string;
  coordenadas: {
    latitud: number;
    longitud: number;
  };
};

export type MotorbikesList = MotorbikeDetails[];
