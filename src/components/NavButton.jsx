import React from "react";

const NavButton = ({ label }) => {
    return (
        <div
            style={{ fontFamily: "'Montserrat-regular', sans-serif", fontSize: "22px" }}
            className="
                flex items-center
                px-1 py-[3px]
                rounded-[16px]
                
                text-[#666666] text-sm
                cursor-pointer

                overflow-hidden
                max-w-[1000px]
                hover:max-w-[200px]

                transition-all duration-300 ease-in-out
                group

                bg-transparent
                hover:bg-gradient-to-r hover:from-purple-50 hover:via-blue-50 hover:to-red-50 
                active:bg-gradient-to-r active:from-purple-50 active:via-blue-50 active:to-red-50"
        >
            <span className="
            whitespace-nowrap 
            opacity-100
            px-[20px]
            py-[0.1px]

            transition-all 
            duration-300 ease-in 
            group-hover:opacity-100 group-hover:visible">
                {label}
            </span>
        </div>
    );
    };
    
    export default NavButton;