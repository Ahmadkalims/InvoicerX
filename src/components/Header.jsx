import React from 'react';
import NavButton from './NavButton';


const Header = () => {
  return (
    <header
      className="fixed top-[30px] left-1/2 -translate-x-1/2 bg-[#ffffff] p-1.5 rounded-full flex gap-2 z-50"
      style={{
        boxShadow: '5px 5px 10.5px rgba(26, 42, 255, 0.05)'
      }}
    >
      <NavButton label="QUOTATION" />
      <NavButton label="INVOICE" />
      <NavButton label="RECEIPT" />
    </header>
  );
};

export default Header;
