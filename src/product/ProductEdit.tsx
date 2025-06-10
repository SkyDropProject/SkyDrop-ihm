import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ImageInput,
  ImageField,
} from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" label="Id du produit" disabled />
      <ImageInput source="imageUrl" label="Image produit">
        <ImageField source="image" title="title" />
      </ImageInput>
      <TextInput source="imageUrl" label="ImageUrl" />
      <TextInput source="name" label="Nom" />
      <NumberInput source="price" label="Prix" />
      <TextInput source="description" />
      <NumberInput source="weight" label="Poids" />
      <BooleanInput source="star" label="Vedette" />
    </SimpleForm>
  </Edit>
);
