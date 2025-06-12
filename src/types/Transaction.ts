interface Transaction {
  _id?: string;
  slug: string; // login, logout, addProduct, removeProduct
  userId: string;
  createdAt: Date;
}

export default Transaction;
