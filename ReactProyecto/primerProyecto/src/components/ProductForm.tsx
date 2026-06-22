import type { ProductFormProps } from "../types/ComponentsProps";

export function ProductForm({
  formData,
  productToEdit,
  loading,
  handleInputChange,
  handleSubmit,
}: ProductFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4"
    >
      <h2 className="text-2xl font-bold">
        {productToEdit ? "Editar producto" : "Nuevo producto"}
      </h2>

      <div>
        <label className="block mb-1">Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-3 rounded bg-slate-800 border border-slate-700"
        />
      </div>

      <div>
        <label className="block mb-1">Precio</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full p-3 rounded bg-slate-800 border border-slate-700"
        />
      </div>

      <div>
        <label className="block mb-1">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-3 rounded bg-slate-800 border border-slate-700"
        />
      </div>

      <div>
        <label className="block mb-1">Categoría ID</label>
        <input
          type="number"
          name="categoryId"
          value={formData.categoryId}
          onChange={handleInputChange}
          className="w-full p-3 rounded bg-slate-800 border border-slate-700"
        />
      </div>

      <div>
        <label className="block mb-1">Imagen URL</label>
        <input
          type="text"
          name="images"
          value={formData.images[0]}
          onChange={handleInputChange}
          className="w-full p-3 rounded bg-slate-800 border border-slate-700"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg"
      >
        {loading
          ? "Guardando..."
          : productToEdit
          ? "Actualizar producto"
          : "Guardar producto"}
      </button>
    </form>
  );
}