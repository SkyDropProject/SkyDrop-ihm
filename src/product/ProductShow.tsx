// src/product/DroneShow.tsx
import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  BooleanField,
} from "react-admin";
import CategoryNameField from "../category/CategoryNameField";
import ProductImageField from "./ProductImageField.tsx";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthHeaders } from "../utils.tsx";
import Category from "../types/Category";

const ProductShow = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL + "/category", {
          headers: getAuthHeaders(),
        });
        setCategories(response.data);
      } catch {
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source={"id"} />
        <ProductImageField apiUrl={API_URL} label="Image produit" />
        <TextField source="name" label="Nom" />
        <NumberField source="price" label="Prix" />
        <TextField source="description" />
        <NumberField source="weight" label="Poids" />
        <BooleanField source="star" label="Vedette" />
        <CategoryNameField categories={categories} label="Catégorie" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ProductShow;
