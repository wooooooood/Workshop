import axios from "axios";

const BASE_API_ADDRESS = "https://localhost:8081/api";

export const PostAsync = async (
  path: string,
  body: object,
  sendAuthorizationHeader = false
) => {
  return await axios.post(`${BASE_API_ADDRESS}/${path}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PutAsync = async (
  path: string,
  body: object,
  sendAuthorizationHeader = false
) => {
  return await axios.put(`${BASE_API_ADDRESS}/${path}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const DeleteAsync = async (
  path: string,
  body: object,
  sendAuthorizationHeader = false
) => {
  return await axios.delete(`${BASE_API_ADDRESS}/${path}`, { data: body });
};

export const GetAsync = async (path: string, parameters?: object) => {
  return await axios.get(`${BASE_API_ADDRESS}/${path}`, {
    params: parameters,
  });
};
