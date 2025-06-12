// src/product/DroneShow.tsx
import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthHeaders } from "../utils.tsx";
import UserNameField from "../user/UserNameField.tsx";
import User from "../types/User.ts";

const TransactionShow = () => {
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
    <Show>
      <SimpleShowLayout>
        <TextField source={"id"} />
        <UserNameField users={users} label={"Utilisateur"} />
        <TextField source="slug" label="Action" />
        <DateField source="createdAt" label="Crée à" />
      </SimpleShowLayout>
    </Show>
  );
};

export default TransactionShow;
