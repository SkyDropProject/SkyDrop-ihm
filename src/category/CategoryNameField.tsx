import { useRecordContext } from "react-admin";
import Category from "../types/Category";

const CategoryNameField = ({
  categories,
}: {
  categories: Category[];
  label: string;
}) => {
  const record = useRecordContext();
  if (!record) return null;
  const cat = categories.find((c) => c._id === record.categoryId);
  return <span>{cat ? cat.name : ""}</span>;
};

export default CategoryNameField;
