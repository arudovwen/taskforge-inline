import urls from "@/helpers/url_helpers";
import { cleanObject } from "@/utils/cleanObject";

const { get, post, put, del } = DataService;

var myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

export const invokeWorkflow = (data) => {
  return post(
    `${urls.INVOKE_WORKFLOW}/${data?.id}`,
    data.values,
    {},
    "WORKFLOW"
  );
};

export const newRequest = (data) => {
  return post(`${urls.REQUEST_NEW}`, data, {}, "WORKFLOW");
};

export const reworkWorkflow = (data) => {
  return put(`${urls.REWORK_WORKFLOW}`, data, {}, "WORKFLOW");
};

export const addVerdict = (data) => {
  return put(`${urls.UPDATE_VERDICT}`, data, {}, "WORKFLOW");
};

export const getInstanceQuery = (data) => {
  return get(`${urls.QUERY_INSTANCE}/${data}`, {}, "WORKFLOW");
};
export const checkSignature = (payload) => {
  return get(
    `${urls.CHECK_SIGNATURE}?${new URLSearchParams(payload)}`,
    {},
    "DOCUMENT"
  );
};

export const saveSignatureRequest = (payload) => {
  return post(
    `${urls.SAVE_SIGNATURE_REQUEST}?${new URLSearchParams(payload)}`,
    {},
    {},
    "DOCUMENT"
  );
};

export const getRequestActivity = (data) => {
  return get(`${urls.REQUEST_ACTIVITY}/${data}`, {}, "WORKFLOW");
};

export const getRequestDetail = ({ workflowId, formId }) => {
  return get(
    `${urls.REQUEST_DETAIL}/${workflowId}/${formId}`,
    {},
    "WORKFLOW"
  );
};


export const rerouteRequest = (payload) => {
  return put(`${urls.REROUTE_REQUEST}`, payload, {}, "WORKFLOW");
};
export const deleteForm = (data) => {
  return del(`${urls.FORM}/delete?formId=${data}`, {}, "FORM");
};

export const uploadRequestForm = (payload) => {
  return post(
    `${urls.REQUEST_UPLOAD_DOCUMENT}`,
    payload,
    {},
    "WORKFLOW"
  );
};

export const uploadFILE = (payload) => {
  return post(`${urls.UPLOAD_FILE}`, payload, {}, "WORKFLOW");
};


export const getRequestSentTome = (payload) => {
  return get(`${urls.REQUEST_SENT_TO_ME}?${new URLSearchParams(cleanObject(payload))}`, {}, "WORKFLOW");
};

export const requestUpdateVerdict = (payload) => {
  return put(`${urls.REQUEST_UPDATE_VERDICT}`, payload, {}, "WORKFLOW");
};

export const getRequestStepDetails = (payload) => {
  return get(`${urls.REQUEST_STEP_DETAILS}/${payload?.approvalRequestId}/${payload?.formId}`, {}, "WORKFLOW");
};
