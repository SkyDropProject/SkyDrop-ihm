import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id du produit" disabled />
        <TextInput source="name" label="Nom" />
      </SimpleForm>
    </Edit>
  );
};
