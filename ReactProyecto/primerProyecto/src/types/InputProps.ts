import type { NombrePropina, monto } from "./Propina";

export interface InputProps {
  label: string;
  value: monto;
  name: NombrePropina;
  onChange: (name: NombrePropina, value: string) => void;
}