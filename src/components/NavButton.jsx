import React from 'react';

const NavButton = ({ icon, label }) => {
  return (
    <div
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="
        flex items-center
        gap-[1px]
        px-3 py-3
        rounded-full 

        text-white text-sm
        cursor-pointer

        overflow-hidden
        max-w-[45px]
        hover:max-w-[200px]

        transition-all duration-300 ease-in-out
        group

        bg-transparent
        hover:bg-white/10 hover:backdrop-blur-md
        active:bg-white/10 active:backdrop-blur-md">


        <img src={icon} alt={label} className="w-5 h-5 shrink-0" />
      
        <span
        className="
          whitespace-nowrap
          opacity-0 invisible
          ml-1
          
          transition-all duration-300 ease-in
          
          group-hover:opacity-100 
          group-hover:visible">
        {label}
        
      </span>


    </div>
  );
};

export default NavButton;
