import Input from "./Input";
import useRegistro from "../hooks/useRegistro";

const Registro: React.FC = () => {

  const {
    registro,
    mensajeExito,
    formularioValido,
    handleCambiarValor,
    handleRegistro,
  } = useRegistro();

  return (

    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 text-center mb-12 mt-5">
          Formulario de Registro
        </h1>

        <div className="grid grid-cols-1 gap-8 mb-12">

          <Input
            label="Usuario"
            value={registro.usuario}
            name="usuario"
            type="text"
            placeholder="Ingrese su usuario"
            onChange={handleCambiarValor}
          />

          <Input
            label="Correo Electrónico"
            value={registro.correo}
            name="correo"
            type="email"
            placeholder="Ingrese su correo"
            onChange={handleCambiarValor}
          />

          <Input
            label="Contraseña"
            value={registro.password}
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={handleCambiarValor}
          />

        </div>

        <button
          onClick={handleRegistro}
          disabled={!formularioValido}
          className={`w-full p-5 text-center rounded-2xl text-white text-2xl font-bold transition duration-300 ${
            formularioValido
              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Registrarse
        </button>

        {mensajeExito && (
          <p className="text-center text-green-600 text-2xl font-bold mt-6">
            {mensajeExito}
          </p>
        )}

      </div>

    </div>
  );
};

export default Registro;