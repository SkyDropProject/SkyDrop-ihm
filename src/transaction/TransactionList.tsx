import { Datagrid, DateField, List, TextField } from "react-admin";
import { useEffect, useState } from "react";
import User from "../types/User.ts";
import axios from "axios";
import { API_URL } from "../config.ts";
import { getAuthHeaders } from "../utils.tsx";
import UserNameField from "../user/UserNameField.tsx";

const TransactionList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API_URL + "/user", {
          headers: getAuthHeaders(),
        });
        setUsers(response.data);
      } catch {
        setUsers([]);
      }
    };
    fetchCategories();
  }, []);
  return (
    <List>
      <Datagrid rowClick="show">
        <UserNameField users={users} label={"Utilisateur"} />
        <TextField source="slug" label="Action" />
        <DateField source="createdAt" label="Crée à" />
      </Datagrid>
    </List>
  );
};

export default TransactionList;
