'use client'

import { useState } from "react";

interface inputSpaceInterface {
  classList: String;
  placeholder: string;
  type: string;
  label: string;
}

const InputSpace: React.FC<inputSpaceInterface> = ({
  classList,
  placeholder,
  type,
  label
}) => {

  const [value, setValue] = useState('')
  return (
    <>
      <label className="text-sm">{label}</label>
      <input
        className={`border-gray-500 border-solid border py-3 ${classList}`}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value)
        }}
      />
    </>
  );
};
export default InputSpace;
