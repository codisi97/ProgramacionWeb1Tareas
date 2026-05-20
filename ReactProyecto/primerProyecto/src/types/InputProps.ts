import type { NombreProducto, precio } from "./productos";

export interface InputProps {
  label: string;
  value: precio;
  name: NombreProducto;
  onChange: (name: NombreProducto, value: string) => void;
}