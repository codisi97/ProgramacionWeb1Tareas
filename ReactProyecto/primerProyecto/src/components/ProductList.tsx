import type { ProductListProps } from "../types/ComponentsProps";

export function ProductList({
  products,
  loading,
  handleEdit,
  handleDelete,
}: ProductListProps) {

  if (loading) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-bold">Cargando productos...</h2>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-slate-900 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-slate-800">
            <th className="p-3 text-left">Imagen</th>
            <th className="p-3 text-left">Título</th>
            <th className="p-3 text-left">Precio</th>
            <th className="p-3 text-left">Categoría</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-t border-slate-700"
            >
              <td className="p-3">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded"
                />
              </td>

              <td className="p-3">
                {product.title}
              </td>

              <td className="p-3">
                ${product.price}
              </td>

              <td className="p-3">
                {product.category?.name}
              </td>

              <td className="p-3">
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && (
        <div className="text-center py-10">
          No hay productos disponibles.
        </div>
      )}
    </div>
  );
}