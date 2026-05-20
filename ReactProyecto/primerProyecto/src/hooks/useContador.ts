import { useState } from "react";
import type { Contador } from "../types/contador";

const useContador = () => {
  const [contador, setContador] = useState<Contador>({
    valor: 0,
  });

  const incrementar = (): void => {
    setContador({
      valor: contador.valor + 1,
    });
  };

  const decrementar = (): void => {
    setContador({
      valor: contador.valor - 1,
    });
  };

  const reiniciar = (): void => {
    setContador({
      valor: 0,
    });
  };

  return {
    contador,
    incrementar,
    decrementar,
    reiniciar,
  };
};

export default useContador;