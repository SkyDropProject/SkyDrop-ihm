import axios from "axios";
import { API_URL } from "../config.js";
import { getAuthHeaders, map_IdToId } from "../utils/utils.js";

const orderDataProvider = {
  getList: async () => {
    const response = await axios.get(API_URL + "/order/all", {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data), total: response.data.length };
  },

  getOne: async (resource, params) => {
    const response = await axios.get(`${API_URL}/order/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },

  update: async (resource, params) => {
    const payload = {
      status: params.data.status,
      _id: params.id,
      droneId: params.data.droneId._id,
    };
    const response = await axios.post(`${API_URL}/order`, payload, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },
  delete: async (resource, params) => {
    const response = await axios.delete(`${API_URL}/order/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },
};

export default orderDataProvider;
