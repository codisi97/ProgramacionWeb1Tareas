// declarar variables 
export type Parcial = number | "";


export interface notasParciales {
  parcial1:Parcial;
  parcial2:Parcial;
  parcial3:Parcial;
  total:number;

}

export type NombreParcial = keyof Omit<notasParciales, "total">;