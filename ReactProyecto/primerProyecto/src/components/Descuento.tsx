import Input from "./Input";
import useDescuento from "../hooks/useDescuento";

const Descuento: React.FC = () => {
  const {
  productos,
  porcentaje,
  handleCambiarProducto,
  calcularCompra,
} = useDescuento();;

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 text-center mb-12 mt-5">
          Calculadora de Descuentos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Input
            label="Producto 1"
            value={productos.producto1}
            name="producto1"
            onChange={handleCambiarProducto}
          />

          <Input
            label="Producto 2"
            value={productos.producto2}
            name="producto2"
            onChange={handleCambiarProducto}
          />

          <Input
            label="Producto 3"
            value={productos.producto3}
            name="producto3"
            onChange={handleCambiarProducto}
          />
        </div>


        <div className="text-center mb-10">
          <button
              onClick={calcularCompra}
               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl text-xl shadow-lg transition duration-300"
                   >
                Calcular Compra
            </button>
        </div>

        <div className="p-8 bg-blue-600 hover:bg-blue-700 rounded-2xl transition-duration-500 ease-in-out cursor-default transform hover:scale-[1.01] text-white text-center">
          <h2 className="text-2xl font-semibold mb-6 opacity-90">
            Resultado de la Compra
          </h2>

          <p className="text-3xl font-bold mb-3">
            Subtotal: L {productos.subtotal.toFixed(2)}
          </p>

          <p className="text-3xl font-bold mb-3">
            Descuento {porcentaje}%: L {productos.descuento.toFixed(2)}
          </p>

          <div className="h-0.5 w-24 bg-white/50 mx-auto my-4 rounded-full" />

          <p className="text-5xl font-black">
            Total a Pagar: L {productos.total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Descuento;