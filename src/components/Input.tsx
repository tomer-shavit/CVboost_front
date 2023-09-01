import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  type?: string;
  text: string;
  onChannge?: () => void;
};

const Input: React.FC<InputProps> = ({
  children,
  className,
  type,
  text,
  onChange,
}) => {
  return (
    <label
      className=" justify-center text-center cursor-pointer px-10 py-3 md:py-4 text-xl font-semibold  text-white transition duration-300 rounded-lg hover:from-green-600 hover:to-cyan-600 ease bg-gradient-to-br from-green-500 to-cyan-500 md:w-auto"
      htmlFor="resume-file"
    >
      {text}
      <input
        type="file"
        accept="application/pdf"
        id="resume-file"
        className="hidden"
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
