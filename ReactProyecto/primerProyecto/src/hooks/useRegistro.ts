import { useState } from "react";
import type { Registro } from "../types/Registro";

const useRegistro = () => {

  const objRegistro: Registro = {
    usuario: "",
    correo: "",
    password: "",
  };

  const [registro, setRegistro] = useState<Registro>(objRegistro);

  const [mensajeExito, setMensajeExito] = useState<string>("");

  const handleCambiarValor = (
    name: keyof Registro,
    value: string
  ): void => {

    setRegistro((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMensajeExito("");
  };

  const formularioValido: boolean =
    registro.usuario.trim() !== "" &&
    registro.correo.trim() !== "" &&
    registro.password.trim() !== "" &&
    registro.password.length >= 6;

  const handleRegistro = (): void => {

    if (!formularioValido) {
      return;
    }

    setMensajeExito(
      `¡Registro exitoso! Bienvenido ${registro.usuario}`
    );

    setRegistro(objRegistro);
  };

  return {
    registro,
    mensajeExito,
    formularioValido,
    handleCambiarValor,
    handleRegistro,
  };
};

export default useRegistro;