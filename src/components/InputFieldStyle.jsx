import React from "react";

const InputFieldStyle = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className="mb-4"
    style={{ fontFamily: "'Montserrat-light', sans-serif", fontSize: "px" }}>
      <label className="block text-[#4d4d4d] text-xl font-light mb-2 ml-3">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[252px] bg-[#e6e6e6] text-gray-700 text-[16px] font-light px-6 py-4 rounded-[16px] focus:outline-none shadow-inner"
      />
    </div>
  );
};

export default InputFieldStyle;