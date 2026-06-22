
import type{ Empleados } from "./Empleados";


export interface ListaEmpleadoProps{
  empleados:Empleados[];
  setEmpleadoEditar: (empleados:Empleados) => void;
  eliminarEmpleado:(id: string) => void;
}