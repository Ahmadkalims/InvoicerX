import React from 'react';
import NavButton from './NavButton';

const Header = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full flex gap-2 z-50">
      <NavButton
        icon="https://img.icons8.com/?size=24&id=1iF9PyJ2Thzo&format=png&color=FFFFFF"
        label="Home"
      />
      <NavButton
        icon="https://img.icons8.com/?size=24&id=M1HUQOE9lLoG&format=png&color=FFFFFF"
        label="Experience"
      />
      <NavButton
        icon="https://img.icons8.com/?size=24&id=79387&format=png&color=FFFFFF"
        label="Education"
      />
      <NavButton
        icon="https://img.icons8.com/?size=24&id=6H65NWsqha0Z&format=png&color=FFFFFF"
        label="Contact"
      />
    </header>
  );
};

export default Header;
