import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ImageField,
  BooleanField,
} from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ImageField source="imageUrl" label={"Image produit"} />
      <TextField source="name" label="Nom" />
      <NumberField source="price" label="Prix" />
      <TextField source="description" />
      <NumberField source="weight" label={"Poids"} />
      <BooleanField source="star" label={"Vedette"} />
    </Datagrid>
  </List>
);
