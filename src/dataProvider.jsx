// src/dataProvider.jsx

import axios from "axios";

const apiUrl = "http://localhost:3001/product";

const mapIdTo_Id = (data) => {
  if (!data) return data;
  const { id, ...rest } = data;
  return id !== undefined ? { _id: id, ...rest } : data;
};

const map_IdToId = (data) => {
  if (Array.isArray(data)) {
    return data.map(({ _id, __v, ...rest }) => ({ ...rest, id: _id }));
  }
  const { _id, __v, ...rest } = data;
  return { ...rest, id: _id };
};

const productDataProvider = {
  getList: async () => {
    const response = await axios.get(apiUrl);
    return { data: map_IdToId(response.data), total: response.data.length };
  },

  getOne: async (resource, params) => {
    const response = await axios.get(`${apiUrl}/${params.id}`);
    return { data: map_IdToId(response.data) };
  },

  create: async (resource, params) => {
    const data = mapIdTo_Id(params.data);
    const response = await axios.put(`${apiUrl}`, data);
    return { data: map_IdToId(response.data) };
  },

  update: async (resource, params) => {
    const { id, ...rest } = params.data;
    const data = { ...rest, _id: id };
    const response = await axios.post(`${apiUrl}`, data);
    return { data: map_IdToId(response.data) };
  },

  delete: async (resource, params) => {
    const response = await axios.delete(`${apiUrl}/${params.id}`);
    return { data: map_IdToId(response.data) };
  },
};

export default productDataProvider;
