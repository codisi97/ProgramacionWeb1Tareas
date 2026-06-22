import { useProducts } from "../hooks/useProducts";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";

export function GestorProductos() {
  const {
    products,
    formData,
    productToEdit,
    loading,
    activeSection,
    setActiveSection,
    handleInputChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    goToNewProduct,
  } = useProducts();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <section className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Gestor de Productos</h1>
            <p className="text-slate-400">
              Crear, listar, editar y eliminar productos.
            </p>
          </div>

          {activeSection === "list" ? (
            <button
              onClick={goToNewProduct}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
            >
              Nuevo Producto
            </button>
          ) : (
            <button
              onClick={() => setActiveSection("list")}
              className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg"
            >
              Volver a la lista
            </button>
          )}
        </header>

        {activeSection === "form" ? (
          <ProductForm
            formData={formData}
            productToEdit={productToEdit}
            loading={loading}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <ProductList
            products={products}
            loading={loading}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </section>
    </main>
  );
}