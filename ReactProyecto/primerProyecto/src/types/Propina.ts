export type monto = number | "";

export interface Propina {
  cuenta: monto;
  porcentaje: number;
  propina: number;
  total: number;
}

export type NombrePropina = keyof Pick<Propina, "cuenta">;