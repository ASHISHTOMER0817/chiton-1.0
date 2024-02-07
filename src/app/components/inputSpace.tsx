'use client'

import { useState } from "react";

interface inputSpaceInterface {
  classList: String;
  placeholder: string;
  type: string;
  label: string;
  value: string 
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSpace: React.FC<inputSpaceInterface> = ({
  classList,
  placeholder,
  type,
  label,
  value,
  setValue
}) => {

  // const [value, setValue] = useState('')
  return (
    <>
      <label className="text-sm">{label}</label>
      <input
      
        className={`border-gray-500 border-solid border py-3 ${classList}`}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange= {setValue}
      />
    </>
  );
};
export default InputSpace;
