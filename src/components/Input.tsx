import React from "react";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  message?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function Input({
  name,
  label,
  type = "text",
  placeholder,
  value,
  message = false,
  onChange,
}: InputProps) {
  const baseClasses =
    "w-full border rounded-lg px-4 font-poppins placeholder:text-sm transition-colors";

  const focusClasses =
    "focus:border-[#4E95E1] focus:ring-1 focus:ring-[#4E95E1] focus:outline-none";

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-dark font-poppins font-medium mb-2"
      >
        {label}
      </label>

      {message ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={6}
          className={`${baseClasses} py-3 border-[#D2D6DB] ${focusClasses}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClasses} py-3.75 border-[#D2D6DB] ${focusClasses}`}
        />
      )}
    </div>
  );
}
