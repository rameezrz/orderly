import { axios } from "./axiosInstance";

export const fetchOrdersAPI = async ({ page = 1, limit = 10 }) => {
  const response = await axios.get(`/orders?page=${page}&limit=${limit}`);
  return response.data;
};
