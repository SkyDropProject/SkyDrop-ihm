import axios from "axios";
import { API_URL } from "../config.js";

const authProvider = {
  async login({ username, password }) {
    const payload = {
      email: username,
      password,
    };
    try {
      const response = await axios.post(`${API_URL}/user/admin/login`, payload);
      localStorage.setItem("token", response.data.token);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async logout() {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  async checkError(error) {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  async checkAuth() {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },

  async getIdentity() {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token");
      const response = await axios.get(`${API_URL}/user/me`, {
        headers: { token: `${token}` },
      });
      const { id, fullName, avatar } = response.data;
      return Promise.resolve({ id, fullName, avatar });
    } catch {
      return Promise.reject();
    }
  },

  canAccess: async () => {
    return Promise.resolve(true);
  },
};

export default authProvider;
