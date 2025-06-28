import React from "react";

const NavButton = ({ label }) => {
    return (
            <div
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="
                    flex items-center
                    px-3 py-3
                    rounded-[12px]
                    
                    text-[#666666] text-sm
                    cursor-pointer
    
                    overflow-hidden
                    max-w-[100px]
                    hover:max-w-[200px]
    
                    transition-all duration-300 ease-in-out
                    group
    
                    bg-transparent
                    hover:bg-gradient-to-r hover:from-purple-100 hover:via-blue-100 hover:to-red-100 hover:backdrop-blur-md
                    active:bg-gradient-to-r active:from-purple-100 active:via-blue-100 active:to-red-100 active:backdrop-blur-md"
            >
                <span className="whitespace-nowrap opacity-100 ml-1 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:visible">
                    {label}
                </span>
            </div>
        );
    };
    
    export default NavButton;