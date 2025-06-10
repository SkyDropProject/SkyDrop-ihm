import { Admin, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import productDataProvider from "./dataProvider.jsx";
import { ProductList } from "./product/ProductList.tsx";
import { ProductEdit } from "./product/ProductEdit.tsx";

export const App = () => (
  <Admin layout={Layout} dataProvider={productDataProvider}>
    <Resource
      name="product"
      list={ProductList}
      edit={ProductEdit}
      show={ShowGuesser}
    />
  </Admin>
);
