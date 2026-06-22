import type { Product } from "./Product";
import type { ProductFormData } from "./ProductFormData";

export type productToEditType = Product | null;

export type ProductFormProps = {
  formData: ProductFormData;
  productToEdit: productToEditType;
  loading: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ProductListProps = {
  products: Product[];
  loading: boolean;
  handleEdit: (product: Product) => void;
  handleDelete: (id: number) => void;
};