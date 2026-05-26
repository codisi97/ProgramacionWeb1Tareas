import Input from "./Input";
import useContacto from "../hooks/useContacto";

const Contacto: React.FC = () => {
  const {
    contacto,
    mensajeExito,
    formularioValido,
    handleCambiarValor,
    handleEnviar,
  } = useContacto();

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 text-center mb-12 mt-5">
          Formulario de Contacto
        </h1>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <Input
            label="Nombre"
            value={contacto.nombre}
            name="nombre"
            type="text"
            placeholder="Ingrese su nombre"
            onChange={handleCambiarValor}
          />

          <Input
            label="Email"
            value={contacto.email}
            name="email"
            type="email"
            placeholder="Ingrese su correo"
            onChange={handleCambiarValor}
          />

          <div className="p-4 bg-white border border-gray-100 shadow-lg rounded-xl transition duration-300">
            <label className="block text-lg font-bold text-gray-700 mb-2">
              Mensaje
            </label>

            <textarea
              value={contacto.mensaje}
              name="mensaje"
              placeholder="Escriba su mensaje"
              onChange={(e) =>
                handleCambiarValor("mensaje", e.target.value)
              }
              className="w-full border-2 rounded-lg p-3 text-lg font-semibold transition duration-150 border-blue-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"
            />
          </div>
        </div>

        <button
          onClick={handleEnviar}
          disabled={!formularioValido}
          className={`w-full p-5 text-center rounded-2xl text-white text-2xl font-bold transition duration-300 ${
            formularioValido
              ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Enviar
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

export default Contacto;