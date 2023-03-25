import React, { ButtonHTMLAttributes } from "react";

type ButtonProps= ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  type?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className,type, onClick}) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${className} w-24`}
    >
      {children}
    </button>
  );
};

export default Button;
