// @ts-nocheck 
import urls from "../helpers/url_helpers";
import { cleanObject } from "../utils/cleanObject";
import { DataService } from "./api_service";

const {  post } = DataService;


export const getForms = (payload: any) => {
  return post(
    `${urls.GET_FORMS}?${new URLSearchParams(payload)}`,
    payload,
    {},
    "FORM"
  );
};
export const getForm = (data: any) => {
  return post(
    `${urls.GET_FORM}?${new URLSearchParams(cleanObject(data))}`,
    data,
    {},
    "FORM"
  );
};

export const addFormExternal = (data: any) => {
  return post(
    `/forms/external/add-form-data?formId=${data?.formId}`,
    data,
    {},
    "FORM"
  );
};
