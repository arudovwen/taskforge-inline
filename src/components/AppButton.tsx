import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface ButtonProps {
  text?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  btnClass?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  iconClass?: string;
  loadingClass?: string;
  link?: string;
  div?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  svgIcon?: any;
}

const Button: React.FC<ButtonProps> = ({
  text = "",
  isDisabled = false,
  isLoading = false,
  btnClass = "bg-primary text-white",
  iconPosition = "left",
  loadingClass = "",
  link = "",
  div = false,
  type = "button",
  svgIcon,
  onClick,
}) => {
  const buttonClasses = clsx(
    "btn inline-flex justify-center",
    isLoading && "pointer-events-none",
    btnClass
  );

  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <>
          <svg
            className={`animate-spin -ml-1 mr-3 h-5 w-5 ${loadingClass}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      );
    }

    return (
      <span className="flex items-center">
      
        {svgIcon && iconPosition === "left" && <span className="mr-1.5">{svgIcon}</span>}
        {text && <span>{text}</span>}
    

        {svgIcon && iconPosition === "right" && <span className="ml-1.5">{svgIcon}</span>}
      </span>
    );
  };

  if (div) {
    return <div className={buttonClasses}>{renderButtonContent()}</div>;
  }

  if (link) {
    return (
      <Link to={link} className={buttonClasses}>
        {renderButtonContent()}
      </Link>
    );
  }

  return (
    <button
      disabled={isDisabled}
      type={type}
      className={buttonClasses}
      data-testid="btn"
      onClick={onClick}
    >
      {renderButtonContent()}
    </button>
  );
};

export default Button;
