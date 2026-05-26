import { useState } from "react";
import type { Contacto } from "../Types/Contacto";

const useContacto = () => {
  const objContacto: Contacto = {
    nombre: "",
    email: "",
    mensaje: "",
  };

  const [contacto, setContacto] = useState<Contacto>(objContacto);
  const [mensajeExito, setMensajeExito] = useState<string>("");

  const handleCambiarValor = (name: keyof Contacto, value: string): void => {
    setContacto((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMensajeExito("");
  };

  const formularioValido: boolean =
    contacto.nombre.trim() !== "" &&
    contacto.email.trim() !== "" &&
    contacto.mensaje.trim() !== "";

  const handleEnviar = (): void => {
    if (!formularioValido) {
      return;
    }

    setMensajeExito("Gracias por tu mensaje!");
    setContacto(objContacto);
  };

  return {
    contacto,
    mensajeExito,
    formularioValido,
    handleCambiarValor,
    handleEnviar,
  };
};

export default useContacto;