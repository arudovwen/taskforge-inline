import { toast } from "../utils/sendToast";

export function errorResponse(
  err: { response: { data: { message: any; Message: any } } },
  message?: string
) {
  toast.error(
    err?.response?.data.message ||
      err?.response?.data.Message ||
      message ||
      "Request failed"
  ,);
}
