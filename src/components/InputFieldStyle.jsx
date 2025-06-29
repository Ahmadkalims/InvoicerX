import React from "react";

const InputFieldStyle = ({ label, placeholder, type = 'text' }) => {
  const fontStyle = {
    fontFamily: "'Montserrat light', sans-serif",
    fontSize: "12px"
  };

  const inputStyle = {
    ...fontStyle,
    boxShadow: '5px 5px 5px rgba(26, 42, 255, 0.1)'
  };

  return (
    <div className="mb-4">
      <label
        style={fontStyle}
        className="block text-[#4d4d4d] mb-1 ml-2.5"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        className="w-[252px] bg-[#ffffff]/90  text-[#4d4d4d] px-5 py-4 rounded-[16px] focus:outline-none"
      />
    </div>
  );
};

export default InputFieldStyle;
