import { useState } from "react";
import type { Productos, NombreProducto } from "../types/productos";

const useDescuento = () => {

  const [productos, setProductos] = useState<Productos>({
    producto1: "",
    producto2: "",
    producto3: "",
    subtotal: 0,
    descuento: 0,
    total: 0,
  });

  const [porcentaje, setPorcentaje] = useState<number>(0);

  const obtenerPorcentajeDescuento = (subtotal: number): number => {
    if (subtotal >= 0 && subtotal <= 1000) return 0;
    if (subtotal >= 1001 && subtotal <= 5000) return 10;
    if (subtotal >= 5001 && subtotal <= 9000) return 20;

    return 30;
  };

  const handleCambiarProducto = (
    name: NombreProducto,
    value: string
  ): void => {

    const valor = value === "" ? "" : Number(value);

    setProductos({
      ...productos,
      [name]: valor,
    });
  };

  const calcularCompra = (): void => {

    const p1 = Number(productos.producto1) || 0;
    const p2 = Number(productos.producto2) || 0;
    const p3 = Number(productos.producto3) || 0;

    const subtotal = p1 + p2 + p3;

    const porcentajeDescuento = obtenerPorcentajeDescuento(subtotal);

    const descuento = subtotal * (porcentajeDescuento / 100);

    const total = subtotal - descuento;

    setPorcentaje(porcentajeDescuento);

    setProductos({
      ...productos,
      subtotal,
      descuento,
      total,
    });
  };

  return {
    productos,
    porcentaje,
    handleCambiarProducto,
    calcularCompra,
  };
};

export default useDescuento;
  