import axios from "axios";

import { API_URL } from "../config.js";
import { getAuthHeaders, map_IdToId } from "../utils/utils.js";

const productDataProvider = {
  getList: async () => {
    const response = await axios.get(API_URL + "/product", {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data), total: response.data.length };
  },

  getOne: async (resource, params) => {
    const response = await axios.get(`${API_URL}/product/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },

  create: async (resource, params) => {
    const formData = new FormData();
    Object.entries(params.data).forEach(([key, value]) => {
      if (key === "image" && value && value.rawFile) {
        formData.append("image", value.rawFile);
      } else {
        formData.append(key, value);
      }
    });
    const response = await axios.put(`${API_URL}/product`, formData, {
      headers: {
        ...getAuthHeaders(),
      },
    });
    return { data: map_IdToId(response.data) };
  },

  update: async (resource, params) => {
    const formData = new FormData();
    Object.entries(params.data).forEach(([key, value]) => {
      if (key === "image" && value && value.rawFile) {
        formData.append("image", value.rawFile);
      } else {
        formData.append(key, value);
      }
    });
    formData.append("_id", params.id);
    const response = await axios.post(`${API_URL}/product`, formData, {
      headers: {
        ...getAuthHeaders(),
      },
    });
    return { data: map_IdToId(response.data) };
  },

  delete: async (resource, params) => {
    const response = await axios.delete(`${API_URL}/product/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: map_IdToId(response.data) };
  },
};

export default productDataProvider;
