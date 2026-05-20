import Input from "./input";
import usePropina from "../hooks/usePropina";

const Propina: React.FC = () => {
  const {
    datos,
    handleCambiarCuenta,
    handleCambiarPorcentaje,
    calcularPropina,
  } = usePropina();

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 text-center mb-12 mt-5">
          Calculadora de Propinas
        </h1>

        <div className="max-w-md mx-auto mb-8">
          <Input
            label="Total de la Cuenta"
            value={datos.cuenta}
            name="cuenta"
            onChange={handleCambiarCuenta}
          />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
            Seleccione el porcentaje de propina
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {[10, 15, 20].map((porcentaje) => (
              <button
                key={porcentaje}
                onClick={() => handleCambiarPorcentaje(porcentaje)}
                className={`py-4 rounded-xl text-xl font-bold transition duration-300 ${
                  datos.porcentaje === porcentaje
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {porcentaje}%
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-10">
          <button
            onClick={calcularPropina}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-300"
          >
            Calcular Propina
          </button>
        </div>

        <div className="p-8 bg-green-600 hover:bg-green-700 rounded-2xl transition-duration-500 ease-in-out cursor-default transform hover:scale-[1.01] text-white text-center">
          <h2 className="text-2xl font-semibold mb-6 opacity-90">
            Resultado
          </h2>

          <p className="text-3xl font-bold mb-3">
            Propina {datos.porcentaje}%: L {datos.propina.toFixed(2)}
          </p>

          <div className="h-0.5 w-24 bg-white/50 mx-auto my-4 rounded-full" />

          <p className="text-5xl font-black">
            Total a Pagar: L {datos.total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Propina;