import productDataProvider from "./productDataProvider.jsx";
import droneDataProvider from "./droneDataProvider.jsx";
import categoryDataProvider from "./categoryDataProvider.jsx";
import transactionDataProvider from "./transactionDataProvider.jsx";
import userDataProvider from "./userDataProvider.jsx";
import orderDataProvider from "./orderDataProvider.jsx";

const dataProvider = {
  getList: (resource, params) => {
    if (resource === "Produit")
      return productDataProvider.getList(resource, params);
    if (resource === "Drone")
      return droneDataProvider.getList(resource, params);
    if (resource === "Catégories")
      return categoryDataProvider.getList(resource, params);
    if (resource === "Transactions")
      return transactionDataProvider.getList(resource, params);
    if (resource === "Utilisateur")
      return userDataProvider.getList(resource, params);
    if (resource === "Commandes")
      return orderDataProvider.getList(resource, params);

    throw new Error("Ressource inconnue");
  },
  getOne: (resource, params) => {
    if (resource === "Produit")
      return productDataProvider.getOne(resource, params);
    if (resource === "Drone") return droneDataProvider.getOne(resource, params);
    if (resource === "Catégories")
      return categoryDataProvider.getOne(resource, params);
    if (resource === "Transactions")
      return transactionDataProvider.getOne(resource, params);
    if (resource === "Utilisateur")
      return userDataProvider.getOne(resource, params);
    if (resource === "Commandes")
      return orderDataProvider.getOne(resource, params);
    throw new Error("Ressource inconnue");
  },
  create: (resource, params) => {
    if (resource === "Produit")
      return productDataProvider.create(resource, params);
    if (resource === "Drone") return droneDataProvider.create(resource, params);
    if (resource === "Catégories")
      return categoryDataProvider.create(resource, params);
    // if (resource === "Transactions")
    //   return transactionDataProvider.create(resource, params);
    throw new Error("Ressource inconnue");
  },
  update: (resource, params) => {
    if (resource === "Produit")
      return productDataProvider.update(resource, params);
    if (resource === "Drone") return droneDataProvider.update(resource, params);
    if (resource === "Catégories")
      return categoryDataProvider.update(resource, params);
    if (resource === "Commandes")
      return orderDataProvider.update(resource, params);
    // if (resource === "Transactions")
    //   return transactionDataProvider.update(resource, params);
    throw new Error("Ressource inconnue");
  },
  delete: (resource, params) => {
    if (resource === "Produit")
      return productDataProvider.delete(resource, params);
    if (resource === "Drone") return droneDataProvider.delete(resource, params);
    if (resource === "Catégories")
      return categoryDataProvider.delete(resource, params);
    throw new Error("Ressource inconnue");
  },
};

export default dataProvider;
