// Replace <br /> with a div that has a smaller margin for better control
// For example, use <div style={{ margin: "12px 0" }} />

import React from "react";
import InputFieldStyle from "./InputFieldStyle";
import FormLogo from "./FormLogo";

const h1Style = {
  fontFamily: "'Montserrat medium', sans-serif",
  fontSize: "22px",
  color: "#666666",
  fontWeight: "500",
  marginLeft: "8px",
  marginBottom: "6px"
};

const smallMargin = { margin: "12px 0" };

const Form = () => {
  return (
    <>
      <header className="fixed top-[100px] left-1/2 -translate-x-1/2 w-full max-w-[510px] z-50">
        
        
        <h1 style={h1Style}>LOGO</h1>
        
        <FormLogo />
        
        
        <h1 style={h1Style}>INVOICE INFO</h1>

        <div className="flex flex-row gap-4">
          <InputFieldStyle label="Invoice No." placeholder="10000" type="number" />
          <InputFieldStyle label="Issue Date" placeholder="mm-dd-yyyy" type="date" />
        </div>

        <div className="flex flex-row gap-4">
          <InputFieldStyle label="Due After" placeholder="15 Days" type="number" />
          <InputFieldStyle label="Due Date" placeholder="mm-dd-yyyy" type="date" />
        </div>

        <div style={smallMargin} />

        <h1 style={h1Style}>BILLING TO</h1>

        <div className="flex flex-row gap-4">
          <InputFieldStyle label="" placeholder="Name" type="text" />
          <InputFieldStyle label="" placeholder="Phone" type="tel" />
        </div>

        <div className="flex flex-row gap-4">
          <InputFieldStyle label="" placeholder="Email" type="email" />
          <InputFieldStyle label="" placeholder="Address" type="text" />
        </div>

        <div style={smallMargin} />

        <h1 style={h1Style}>BILLING FROM</h1>

        <div className="flex flex-row gap-4">
          <InputFieldStyle label="" placeholder="Name" type="text" />
          <InputFieldStyle label="" placeholder="Phone" type="tel" />
        </div>

        <div className="flex flex-row gap-4">
          <InputFieldStyle label="" placeholder="Email" type="email" />
          <InputFieldStyle label="" placeholder="Address" type="text" />
        </div>
      </header>
    </>
  );
};

export default Form;
