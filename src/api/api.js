import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' }
});

// Auth mock (returns user object)
export const login = async (email, password) => {
  const res = await API.get(`/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  return res.data[0]; // undefined if not found
};

export default API;