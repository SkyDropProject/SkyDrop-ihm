import { useEffect, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ImageInput,
  ImageField,
  SelectInput,
} from "react-admin";
import axios from "axios";
import Category from "../types/Category";
import { getAuthHeaders } from "../utils.tsx";
import { API_URL } from "../config";

export const ProductCreate = () => {
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
    <Create>
      <SimpleForm>
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
    </Create>
  );
};
