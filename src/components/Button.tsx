import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  type?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-green-600 hover:to-cyan-600 ease bg-gradient-to-br from-green-500 to-cyan-500 md:w-auto`}
    >
      {children}
    </button>
  );
};

export default Button;
