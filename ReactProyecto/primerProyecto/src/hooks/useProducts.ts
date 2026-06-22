import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState, type ChangeEvent } from "react";
import type { Product } from "../types/Product";
import type { ProductFormData } from "../types/ProductFormData";
import type { productToEditType } from "../types/ComponentsProps";

export const useProducts = () => {
  const API_URL = "https://api.escuelajs.co/api/v1/products";

  const DEFAULT_FORM: ProductFormData = {
    title: "",
    price: "",
    description: "",
    categoryId: "1",
    images: ["https://placehold.co/600x400?text=Producto"],
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<ProductFormData>(DEFAULT_FORM);
  const [productToEdit, setProductToEdit] = useState<productToEditType>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<"list" | "form">("list");

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const res = await axios.get<Product[]>(API_URL);
      setProducts(res.data);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se cargaron los productos",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;

    if (name === "images") {
      setFormData((prev) => ({
        ...prev,
        images: [value],
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = (): void => {
    setFormData(DEFAULT_FORM);
    setProductToEdit(null);
  };

  const goToNewProduct = (): void => {
    resetForm();
    setActiveSection("form");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!formData.title || !formData.price || !formData.description) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Complete todos los campos requeridos.",
      });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        title: formData.title,
        price: Number(formData.price),
        description: formData.description,
        categoryId: Number(formData.categoryId),
        images: formData.images,
      };

      if (productToEdit) {
        const res = await axios.put<Product>(
          `${API_URL}/${productToEdit.id}`,
          payload
        );

        setProducts((prev) =>
          prev.map((p) => (p.id === productToEdit.id ? res.data : p))
        );

        Swal.fire({
          icon: "success",
          title: "¡Actualizado!",
          text: "El producto fue actualizado correctamente.",
        });
      } else {
        const res = await axios.post<Product>(API_URL, payload);

        setProducts((prev) => [res.data, ...prev]);

        Swal.fire({
          icon: "success",
          title: "¡Creado!",
          text: "Nuevo producto agregado correctamente.",
        });
      }

      resetForm();
      setActiveSection("list");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar el producto.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: Product): void => {
    setProductToEdit(product);

    setFormData({
      title: product.title,
      price: String(product.price),
      description: product.description,
      categoryId: String(product.category.id),
      images: product.images,
    });

    setActiveSection("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number): Promise<void> => {
    const result = await Swal.fire({
      icon: "warning",
      title: "¿Eliminar producto?",
      text: "Esta acción no se puede deshacer.",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    setLoading(true);

    try {
      await axios.delete(`${API_URL}/${id}`);

      setProducts((prev) => prev.filter((p) => p.id !== id));

      Swal.fire({
        icon: "success",
        title: "¡Eliminado!",
        text: "El producto fue eliminado.",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el producto.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    formData,
    setFormData,
    productToEdit,
    setProductToEdit,
    loading,
    activeSection,
    setActiveSection,
    fetchProducts,
    handleInputChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    goToNewProduct,
  };
};