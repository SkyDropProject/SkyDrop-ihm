import axios from "axios";
import { API_URL } from "../config.js";
import { getAuthHeaders, map_IdToId } from "../utils/utils.js";

const categoryDataProvider = {
  getList: async () => {
    const response = await axios.get(API_URL + "/category", {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data), total: response.data.length };
  },

  getOne: async (resource, params) => {
    const response = await axios.get(`${API_URL}/category/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },

  create: async (resource, params) => {
    const payload = {
      name: params.data.name,
    };
    const response = await axios.put(`${API_URL}/category`, payload, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },

  update: async (resource, params) => {
    const payload = {
      name: params.data.name,
      _id: params.data.id,
    };
    const response = await axios.put(
      `${API_URL}/category/${params.id}`,
      payload,
      {
        headers: getAuthHeaders(),
      },
    );
    return { data: map_IdToId(response.data) };
  },
  delete: async (resource, params) => {
    const response = await axios.delete(`${API_URL}/category/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },
};

export default categoryDataProvider;
