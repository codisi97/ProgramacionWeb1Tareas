import type { Registro } from "./Registro";

export type InputProps = {
  label: string;
  value: string;
  name: keyof Registro;
  type?: string;
  placeholder: string;
  onChange: (name: keyof Registro, value: string) => void;
};