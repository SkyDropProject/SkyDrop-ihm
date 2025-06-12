const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { token: `${token}` } : {};
};

const map_IdToId = (data) => {
  if (Array.isArray(data)) {
    return data.map(({ _id, __v, ...rest }) => ({ ...rest, id: _id }));
  }
  const { _id, __v, ...rest } = data;
  return { ...rest, id: _id };
};

export { getAuthHeaders, map_IdToId };
