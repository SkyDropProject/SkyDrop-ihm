import { Create, SimpleForm, TextInput } from "react-admin";

const CategoryCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Nom" />
      </SimpleForm>
    </Create>
  );
};

export default CategoryCreate;
