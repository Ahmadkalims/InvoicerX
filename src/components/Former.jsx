import React from "react";
import InputFieldStyle from "./InputFieldStyle";

const Former = () => {
  return (
    <header className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[400px] flex flex-col items-center">
      <h1>LOGO</h1>
      <InputFieldStyle label="Email" placeholder="Enter your email" />
      <InputFieldStyle label="Password" placeholder="Enter your password" type="password" />
     
    </header>
  );
};

export default Former;
