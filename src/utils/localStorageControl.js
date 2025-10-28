const getItem = (key) => {
  const data = typeof window !== 'undefined' ? localStorage.getItem(key) : '';

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key, value) => {
  const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
  return localStorage.setItem(key, stringify);
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
// .node-shadow {
//   box-shadow: 0px 2px 4px -2px #1018280f, 0px 4px 8px -2px #1018281a;
// }