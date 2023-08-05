import React, { InputHTMLAttributes } from "react";
import { text } from "stream/consumers";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  type?: string;
  onChannge?: () => void;
};

const Input: React.FC<InputProps> = ({
  children,
  className,
  type,
  onChange,
}) => {
  return (
    <label className=" justify-center text-center">
      <input
        type="file"
        accept="application/pdf"
        className="text-grey-500
    file:mr-5 file:py-2 file:px-6
    file:rounded file:border-0
    file:text-lg file:font-medium
    file:bg-green-500 file:text-white
    hover:file:cursor-pointer hover:file:bg-green-600
    hover:file:text-white"
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
