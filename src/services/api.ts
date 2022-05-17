import axios from "axios";

import { SANDBOX_BASE_URL, LIVE_BASE_URL } from "../utils/constants";

const getBaseUrl = (apiKey: string): string => {
  if (apiKey.includes("TEST")) {
    return SANDBOX_BASE_URL;
  } else {
    return LIVE_BASE_URL;
  }
};

export const pycApi: any = axios.create({
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
});

export const setupApi = async (apiKey: string) => {
  try {
    if (apiKey) {
      pycApi.defaults.headers.common["X-ACCESS-TOKEN"] = apiKey;
      const baseUrl = getBaseUrl(apiKey);
      pycApi.defaults.baseURL = baseUrl;
    }
  } catch {
    throw new Error("Invalid API key");
  }
};
