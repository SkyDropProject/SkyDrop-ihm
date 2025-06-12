import { Admin, Layout, Resource, ShowGuesser } from "react-admin";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import authProvider from "./providers/authProvider.jsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import dataProvider from "./providers/dataProvider.jsx";
import { ProductList } from "./product/ProductList.tsx";
import { ProductEdit } from "./product/ProductEdit.tsx";
import { ProductCreate } from "./product/ProductCreate.tsx";
import polyglotI18nProvider from "ra-i18n-polyglot";
import frenchMessages from "ra-language-french";
import DroneCreate from "./drone/DroneCreate.tsx";
import DroneList from "./drone/DroneList.tsx";
import { DroneEdit } from "./drone/DroneEdit.tsx";
import ProductShow from "./product/ProductShow.tsx";
import CategoryList from "./category/CategoryList.tsx";
import CategoryCreate from "./category/CategoryCreate.tsx";
import { CategoryEdit } from "./category/CategoryEdit.tsx";

const i18nProvider = polyglotI18nProvider(() => frenchMessages, "fr");

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    requireAuth
  >
    <Resource
      name="Produit"
      list={ProductList}
      edit={ProductEdit}
      show={ProductShow}
      create={ProductCreate}
    />
    <Resource
      name="Drone"
      list={DroneList}
      show={ShowGuesser}
      create={DroneCreate}
      edit={DroneEdit}
    />
    <Resource
      name="Catégories"
      list={CategoryList}
      show={ShowGuesser}
      create={CategoryCreate}
      edit={CategoryEdit}
    />
  </Admin>
);
