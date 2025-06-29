import React from "react";

const InputFieldStyle = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label style={{ fontFamily: "'Montserrat-light', sans-serif", fontSize: "px" }}
      className="block text-[#4d4d4d] mb-2 ml-3">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[252px] bg-[#e6e6e6] text-[#4d4d4d] px-6 py-4 rounded-[16px] focus:outline-none shadow-inner"
      />
    </div>
  );
};

export default InputFieldStyle;