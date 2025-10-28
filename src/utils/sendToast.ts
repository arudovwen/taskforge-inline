import React from "react";
import { toast as reactToast } from "react-toastify";
import CustomToastComponent from "../components/CustomToastComponent";

const baseStyle =
  "!max-w-[290px] rounded-lg border flex flex-row py-[10px] pl-[15px] px-7 [&_div]:m-0 [&_div]:h-fit h-fit";

const baseOptions = {
  hideProgressBar: true,
  autoClose: true,
  className: "",
};

const typeStyles: Record<string, string> = {
  success: "border-[#ABEFC6] bg-[#ECFDF3] !text-[#085D3A]",
  error: "border-[#FDA29B] bg-[#FEF3F2] !text-[#912018]",
  info: "border-main/30 bg-main/10 !text-main",
  warning: "border-[#FDA29B] bg-[#FEF3F2] !text-[#912018]",
};

function showToast(
  text: string,
  subText: string,
  messageType: string,
  options?: any
) {
  reactToast(
    React.createElement(CustomToastComponent, {
      messageType,
      text: subText,
      subtext: text,
    }),
    {
      ...{
        ...baseOptions,
        className: `${baseStyle} ${typeStyles[messageType]}`,
      },
      ...options,
    }
  );
}

const toastBase = {
  success: (
    text: string,
    subText?: string,
    options?: any,
    messageType: string = "success"
  ) => showToast(text, subText || "", messageType, options),
  error: (
    text: string,
    subText?: string,
    options?: any,
    messageType: string = "error"
  ) => showToast(text, subText || "", messageType, options),
  info: (
    text: string,
    subText?: string,
    options?: any,
    messageType: string = "info"
  ) => showToast(text, subText || "", messageType, options),
  warning: (
    text: string,
    subText?: string,
    options?: any,
    messageType: string = "warning"
  ) => showToast(text, subText || "", messageType, options),
  default: (
    text: string,
    subText?: string,
    options?: any,
    messageType: string = "default"
  ) => showToast(text, subText || "", messageType, options),
  fallback: (
    text: string,
    subText?: string,
    options?: any,
    messageType: string = "default"
  ) => showToast(text, subText || "", messageType, options),
};

export const toast = Object.assign(
  (text: string, subText: string, options?: any) =>
    showToast(text, subText, "default", options),
  toastBase
);
