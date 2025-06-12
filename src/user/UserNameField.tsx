import { useRecordContext, Link } from "react-admin";
import User from "../types/User.ts";

const UserNameField = ({ users }: { users: User[]; label: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const cat = users.find((c) => c._id === record.userId);
  if (!cat) return null;
  return (
    <Link to={`/Utilisateur/${cat._id}`}>
      {cat.firstName + " " + cat.lastName}
    </Link>
  );
};

export default UserNameField;
