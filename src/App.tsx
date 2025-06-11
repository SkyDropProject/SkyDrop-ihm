import { Admin, Layout, Resource, ShowGuesser } from "react-admin";
import productDataProvider from "./dataProvider.jsx";
import authProvider from "./authProvider.jsx";
import { ProductList } from "./product/ProductList.tsx";
import { ProductEdit } from "./product/ProductEdit.tsx";
import { ProductCreate } from "./product/ProductCreate.tsx";
import polyglotI18nProvider from "ra-i18n-polyglot";
import frenchMessages from "ra-language-french";

const i18nProvider = polyglotI18nProvider(() => frenchMessages, "fr");

export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={productDataProvider}
    i18nProvider={i18nProvider}
    requireAuth
  >
    <Resource
      name="Produit"
      list={ProductList}
      edit={ProductEdit}
      show={ShowGuesser}
      create={ProductCreate}
    />
    <Resource name="Drone" />
  </Admin>
);
