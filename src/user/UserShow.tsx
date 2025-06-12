import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";

const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="firstName" label="Prénom" />
      <TextField source="lastName" label="Nom" />
      <TextField source="email" label="Email" />
      <DateField source="birthdate" label="Date de naissance" />
      <DateField source="registrationDate" label="Date d'inscription" />
    </SimpleShowLayout>
  </Show>
);

export default UserShow;
