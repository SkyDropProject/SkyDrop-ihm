const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { token: `${token}` } : {};
};

export { getAuthHeaders };
