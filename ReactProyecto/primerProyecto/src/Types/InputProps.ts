import type { Contacto } from "./Contacto";

export type InputProps = {
  label: string;
  value: string;
  name: keyof Contacto;
  type?: string;
  placeholder: string;
  onChange: (name: keyof Contacto, value: string) => void;
};