import Axios from "axios";
import { config } from "../utils/config";
// import { getItem } from '../utils/localStorageControl';

// Define API base URLs
const API_URLS = {
  FORM: `${config.API_BASE_URL}/forms/v1`,
  WORKFLOW: `${config.API_BASE_URL}/workflows/api/v1`,
  USER: `${config.API_BASE_URL}/users/v1`,
  DOCUMENT: `${config.API_BASE_URL}/documents/v1`,
  PAYMENT: `${config.API_BASE_URL}/payments/api/v1`,
  AUDIT: `${config.API_BASE_URL}/audit/v1`,
};

// const getToken = () => getItem("token");

// 🔒 Global flag to block all further calls after auth error
// let isAuthError = false;

// Create Axios instances with shared logic
const createAxiosInstance = (baseURL: string) => {
  const instance = Axios.create({
    baseURL,
    headers: {
      // Authorization: `Bearer ${getToken() || ""}`,
      "Content-Type": "application/json",
    },
    withCredentials: false,
  });

  // ✅ Block requests if auth error previously occurred
  // instance.interceptors.request.use((config) => {
  //   if (isAuthError) {
  //     return Promise.reject(new Axios.Cancel("Blocked due to auth error"));
  //   }
  //   return config;
  // });

  // Handle auth errors globally
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error?.response?.status;

      if (status === 401) {
        window.location.replace("/");
        return Promise.reject(error);
      }
      if (status === 403) {
        console.warn("Authorization error. Blocking further requests.");
        isAuthError = true;

        // Clear session & redirect
        localStorage.clear()
        window.location.replace("/");

        return Promise.reject(error);
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

// Create instances for each API
const axiosFormApi = createAxiosInstance(API_URLS.FORM);
const axiosWorkflowApi = createAxiosInstance(API_URLS.WORKFLOW);
const axiosDocumentApi = createAxiosInstance(API_URLS.DOCUMENT);
const axiosUserApi = createAxiosInstance(API_URLS.USER);
const axiosPaymentApi = createAxiosInstance(API_URLS.PAYMENT);
const axiosAuditApi = createAxiosInstance(API_URLS.AUDIT);

// Utility to get correct Axios instance
const getAxiosInstance = (api: string) => {
  switch (api) {
    case "FORM":
      return axiosFormApi;
    case "WORKFLOW":
      return axiosWorkflowApi;
    case "USER":
      return axiosUserApi;
    case "DOCUMENT":
      return axiosDocumentApi;
    case "PAYMENT":
      return axiosPaymentApi;
    case "AUDIT":
      return axiosAuditApi;
    default:
      return axiosWorkflowApi;
  }
};

// ✅ Shared request methods
export const get = async (url, config = {}, api = "WORKFLOW") => {
  const instance = getAxiosInstance(api);
  return instance.get(url, config);
};

export const post = async (url, data, config = {}, api = "WORKFLOW") => {
  const instance = getAxiosInstance(api);
  return instance.post(url, data, config);
};

export const put = async (url, data, config = {}, api = "WORKFLOW") => {
  const instance = getAxiosInstance(api);
  return instance.put(url, data, config);
};

export const del = async (url, config = {}, api = "WORKFLOW") => {
  const instance = getAxiosInstance(api);
  return instance.delete(url, config);
};

export const DataService = { get, post, put, del };
