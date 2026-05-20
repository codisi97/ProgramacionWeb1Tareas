import {useEffect, useState, useCallback} from 'react';
import type {NombreParcial,Parcial} from "./../interfaces/NotasParciales";

export const useNotasParciales = () => {
  const [notas, setNotas] = useState<{
    parcial1:Parcial;
    parcial2:Parcial;}