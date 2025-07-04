import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ImageInput,
  ImageField,
  SelectInput,
} from "react-admin";
import { useEffect, useState } from "react";
import Category from "../types/Category.ts";
import axios from "axios";
import { API_URL } from "../config.ts";
import { getAuthHeaders } from "../utils.tsx";
import ProductEditImageField from "./ProductEditImageField.tsx";

export const ProductEdit = () => {
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
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id du produit" disabled />
        <ProductEditImageField apiUrl={API_URL} />
        <ImageInput source="image" label="Image produit">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="name" label="Nom" />
        <NumberInput source="price" label="Prix" />
        <TextInput source="description" />
        <NumberInput source="weight" label="Poids" />
        <NumberInput source="stock" label="Stock" />
        <SelectInput
          source="categoryId"
          label="Category"
          choices={categories}
          optionText="name"
          optionValue="_id"
        />
        <BooleanInput source="star" label="Vedette" />
      </SimpleForm>
    </Edit>
  );
};
