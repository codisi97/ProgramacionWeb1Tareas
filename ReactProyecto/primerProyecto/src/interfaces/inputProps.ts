import type {NombreParcial,Parcial} from "./NotasParciales";


export interface InputProps {
  label:string;
  maxPoints:number;
  parcial: NombreParcial;
  value:number|"";
  onChange: (parcial: NombreParcial, value: Parcial) => void;
}
