const api = async (url, opts) => {
  const response = await fetch(url, opts);
  const data = await response.json();
  return data;
};

export default api;
