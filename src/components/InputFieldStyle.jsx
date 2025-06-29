import React from "react";

const InputFieldStyle = ({ label, placeholder, type = 'text' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-xl font-light mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[252px] bg-[#e6e6e6] text-gray-700 text-[16px] font-light px-6 py-4 rounded-[24px] focus:outline-none shadow-inner"
      />
    </div>
  );
};

export default InputFieldStyle;