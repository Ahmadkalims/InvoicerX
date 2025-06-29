import React from 'react';

const FormLogo = () => {
  return (
    <div className="flex justify-between items-start gap-10 px-0 py-0">
      
      {/* Left - Logo and Company Name */}
      <div>
        
        <div className="flex items-center gap-4">
          {/* Logo Placeholder */}
          <div className="w-[100px] h-[100px] bg-[#ffffff] rounded-[12px] flex items-center justify-center text-gray-600 text-xl font-light">
            PLACE<br />LOGO
          </div>

          {/* Company Name */}
          <div className="bg-[#ffffff] px-5 py-2 rounded-2xl text-gray-700 text-[17pt] font-light">
            Company Name
          </div>
        </div>
      </div>

      {/* Right - Currency Section */}
      <div className="flex flex-col gap-6">
        {/* Local Currency */}
        <div>
          <p className="text-gray-600 text-xll font-light mb-2">LOCAL CURRENCY</p>
          <div className="flex items-center bg-gradient-to-r from-gray-200 to-pink-100 rounded-full overflow-hidden">
            <div className="px-6 py-3 text-2xll text-gray-700 font-light bg-gray-200">₹</div>
            <div className="px-6 py-3 text-2xll text-gray-700 font-light">INR</div>
          </div>
        </div>

        {/* Convert To */}
        <div>
          <p className="text-gray-600 text-xll font-light mb-2">CONVERT TO</p>
          <div className="flex items-center bg-gradient-to-r from-gray-200 to-pink-100 rounded-full overflow-hidden">
            <div className="px-6 py-3 text-2xll text-gray-700 font-light bg-gray-200">$</div>
            <div className="px-6 py-3 text-2xll text-gray-700 font-light">USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogo;
