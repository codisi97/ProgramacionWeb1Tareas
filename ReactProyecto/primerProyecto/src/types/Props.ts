import type { Empleados } from "./Empleados";

type EmpleadoType = Empleados|null;

export interface Props {
  agregarActualizarEmpleados: (e:Empleados) => void;
  empleadoEditar: EmpleadoType;
  setEmpleadoEditar: (e:Empleados)=> void;
}