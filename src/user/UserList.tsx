import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  ShowButton,
} from "react-admin";

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="firstName" label="Prénom" />
      <TextField source="lastName" label="Nom" />
      <EmailField source="email" label="Email" />
      <DateField source="birthdate" label="Date de naissance" />
      <DateField source="registrationDate" label="Date d'inscription" />
      <ShowButton />
    </Datagrid>
  </List>
);

export default UserList;
