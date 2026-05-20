import { useState } from "react";
import type { Propina, NombrePropina } from "../types/Propina";

const usePropina = () => {
  const [datos, setDatos] = useState<Propina>({
    cuenta: "",
    porcentaje: 10,
    propina: 0,
    total: 0,
  });

  const handleCambiarCuenta = (
    name: NombrePropina,
    value: string
  ): void => {
    const valor = value === "" ? "" : Number(value);

    setDatos({
      ...datos,
      [name]: valor,
    });
  };

  const handleCambiarPorcentaje = (porcentaje: number): void => {
    setDatos({
      ...datos,
      porcentaje,
    });
  };

  const calcularPropina = (): void => {
    const cuenta = Number(datos.cuenta) || 0;

    const propina = cuenta * (datos.porcentaje / 100);
    const total = cuenta + propina;

    setDatos({
      ...datos,
      propina,
      total,
    });
  };

  return {
    datos,
    handleCambiarCuenta,
    handleCambiarPorcentaje,
    calcularPropina,
  };
};

export default usePropina;