import React from 'react';

const NavButton = ({ icon, label }) => {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-300 ease-in-out cursor-pointer overflow-hidden w-[44px] hover:w-auto group"
    >
      <img src={icon} alt={label} className="w-5 h-5 shrink-0" />
      <span
        className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"
      >
        {label}
      </span>
    </div>
  );
};

export default NavButton;
