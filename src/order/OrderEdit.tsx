import {
  Edit,
  NumberField,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const OrderEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id du produit" disabled />
        <NumberInput source="price" label="Prix" />
        <SelectInput source="status" choices={["created", "finished"]} />
      </SimpleForm>
    </Edit>
  );
};
