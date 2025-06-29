import React from 'react';
import NavButton from './NavButton';
import NavButton2 from './NavButton2';

const Header = () => {
  return (
    <header
      className="fixed top-[30px] left-1/2 -translate-x-1/2 bg-[#ffffff] p-1.5 rounded-full flex gap-2 z-50"
      style={{
        boxShadow: '5px 5px 10.5px rgba(26, 42, 255, 0.05)'
      }}
    >
      <NavButton2 label="QUOTATION" />
      <NavButton2 label="INVOICE" />
      <NavButton2 label="RECEIPT" />
    </header>
  );
};

export default Header;
