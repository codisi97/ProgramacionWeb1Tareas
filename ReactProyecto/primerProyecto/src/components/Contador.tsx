import useContador from "../hooks/useContador";

const Contador: React.FC = () => {
  const { contador, incrementar, decrementar, reiniciar } = useContador();

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 text-center mb-12 mt-5">
          Contador de Eventos
        </h1>

        <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Valor actual del contador
          </h2>

          <p className="text-8xl font-black text-blue-600 mb-8">
            {contador.valor}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={decrementar}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transition duration-300"
            >
              Disminuir
            </button>

            <button
              onClick={reiniciar}
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transition duration-300"
            >
              Reiniciar
            </button>

            <button
              onClick={incrementar}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transition duration-300"
            >
              Aumentar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contador;