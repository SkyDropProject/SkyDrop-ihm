import {
  Edit,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const DroneEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id du produit" disabled />
        <TextInput source="name" label="Nom" />
        <SelectInput source="status" choices={["waiting", "available"]} />
        <NumberInput source="coordinates.x" label="Latitude" />
        <NumberInput source="coordinates.y" label="Longitude" />
      </SimpleForm>
    </Edit>
  );
};
