import axios from "axios";

export const api = axios.create({
  timeout: 10_000, 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Network error";
      
    return Promise.reject(new Error(message));
  }
);

api.interceptors.request.use(config => {
  console.log("Sending request:", config.url, config.params);
  return config;
});
