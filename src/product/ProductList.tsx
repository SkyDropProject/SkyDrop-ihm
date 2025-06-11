import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
} from "react-admin";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "../types/Category";
import CategoryNameField from "../category/CategoryNameField";
import ProductImageField from "./ProductImageField.tsx";
import { getAuthHeaders } from "../utils.tsx";
import { API_URL } from "../config";

export const ProductList = () => {
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
    <List>
      <Datagrid rowClick="edit">
        <ProductImageField apiUrl={API_URL} label="Image produit" />
        <TextField source="name" label="Nom" />
        <NumberField source="price" label="Prix" />
        <TextField source="description" />
        <NumberField source="weight" label={"Poids"} />
        <BooleanField source="star" label={"Vedette"} />
        <CategoryNameField categories={categories} label="Catégorie" />
      </Datagrid>
    </List>
  );
};
