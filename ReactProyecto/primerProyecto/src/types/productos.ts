export type precio = number | "";

export interface Productos {
  producto1: precio;
  producto2: precio;
  producto3: precio;
  subtotal: number;
  descuento: number;
  total: number;
}

export type NombreProducto = keyof Omit<Productos, "subtotal" | "descuento" | "total">;