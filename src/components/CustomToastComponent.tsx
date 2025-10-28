import React, { useEffect } from "react";
import DeleteUserSvg from "../assets/svgs/DeleteUserSvg";
import ErrorSvg from "../assets/svgs/ErrorSvg";
import InfoSvg from "../assets/svgs/info";
import ToastCheckSvg from "../assets/svgs/ToastCheckSvg";

interface CustomToastComponentProps {
  messageType: string;
  text: string;
  subtext: string;
}

const GetIconByType = (messageType: string): React.ReactNode => {
  switch (messageType) {
    case "delete_user":
      return <DeleteUserSvg />;
    case "success":
      return <ToastCheckSvg />;
    case "error":
      return <ErrorSvg />;
    case "info":
      return <InfoSvg />;
    default:
      return <DeleteUserSvg />;
  }
};

const typeTextColor: Record<string, string> = {
  success: "!text-[#085D3A]",
  error: "!text-[#912018]",
  delete_user: "!text-[#912018]",
};

const CustomToastComponent: React.FC<CustomToastComponentProps> = ({
  messageType,
  text,
  subtext,
}) => {
  useEffect(() => {
    console.log("msg", messageType);
  }, []);
  return (
    <div className="flex flex-row items-center w-full gap-[10px] rounded-lg">
      <div className="flex items-center justify-center">
        {GetIconByType(messageType)}
      </div>
      <div className={"flex flex-col gap-y-1"}>
        {text && (
          <h2
            className={`text-xs font-semibold  tracking-normal ${typeTextColor[messageType]}`}
          >
            {text}
          </h2>
        )}
        <p
          className={`text-sm  font-medium font-['Public Sans'] ${typeTextColor[messageType]}`}
        >
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default CustomToastComponent;
