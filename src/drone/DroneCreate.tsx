import { Create, SimpleForm, TextInput } from "react-admin";

const DroneCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Nom" />
      </SimpleForm>
    </Create>
  );
};

export default DroneCreate;
