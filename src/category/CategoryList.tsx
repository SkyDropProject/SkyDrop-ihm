import { Datagrid, List, TextField } from "react-admin";

const CategoryList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="name" label="Nom" />
      </Datagrid>
    </List>
  );
};

export default CategoryList;
