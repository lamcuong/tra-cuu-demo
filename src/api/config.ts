import axios from "axios";
import { getCookie } from "cookies-next";
const _axios = axios.create({
  baseURL: "http",
});
_axios.interceptors.request.use((config: any) => {
  return {
    ...config,
    headers: {
      ...(config?.headers || {}),
      Authorization: `Bearer ${getCookie("Authorization") ?? ""}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
});

export default _axios;
