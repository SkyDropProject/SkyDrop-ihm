// src/product/DroneShow.tsx
import { Show, SimpleShowLayout, TextField, NumberField } from "react-admin";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthHeaders } from "../utils.tsx";
import DroneField from "../drone/DroneField.tsx";

const OrderShow = () => {
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
    <Show>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="status" label="Statut" />
        <NumberField source="price" label="Prix" />
        <DroneField drones={drones} label={"Drone"} />
      </SimpleShowLayout>
    </Show>
  );
};

export default OrderShow;
