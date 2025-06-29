import React from "react";
import InputFieldStyle from "./InputFieldStyle";

const Form = () => {
  return (
    <>
    <header className="fixed top-[100px] left-1/2 -translate-x-1/2 w-full max-w-[510px] z-50">
      <h1 className="text-[#4d4d4d] text-xl font-bold2 ml-2"
      style={{ fontFamily: "'Montserrat-regular', sans-serif", fontSize: "22px" }}>INVOICE INFO</h1>

      <div className="flex flex-row gap-4">

        <InputFieldStyle label="Invoice No." placeholder="10000" type="number" />
        <InputFieldStyle label="Issue Date" placeholder="mm-dd-yyyy" type="date" />

        </div>

      

    </header>
    </>
  );
};

export default Form;
