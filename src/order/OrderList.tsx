import { Datagrid, List, NumberField, TextField } from "react-admin";
import { useEffect, useState } from "react";
import { API_URL } from "../config.ts";
import axios from "axios";
import { getAuthHeaders } from "../utils.tsx";
import DroneField from "../drone/DroneField.tsx";

const OrderList = () => {
  const [drones, setDrones] = useState([]);

  const getDrones = async () => {
    try {
      const response = await axios.get(API_URL + "/drone", {
        headers: getAuthHeaders(),
      });
      setDrones(response.data);
    } catch {
      setDrones([]);
    }
  };

  useEffect(() => {
    getDrones();
  }, []);
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" label="ID" />
        <TextField source="status" label="Statut" />
        <NumberField source="price" label="Prix" />
        <DroneField drones={drones} label={"Drone"} />
      </Datagrid>
    </List>
  );
};

export default OrderList;
