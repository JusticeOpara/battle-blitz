import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 w-full h-[70px] px-[60px]">
      <div className="flex w-full h-full justify-between items-center">
        <h1 className="text-[29px] font-bold">Battle-blitz</h1>

<ul className="flex list-none gap-[88px] items-center">
          <li className="text-base font-normal leading-normal">Home</li>
         
          <li className="text-base font-normal leading-normal ">AboutUs</li>
          <li className="text-base font-normal leading-normal">Portfolio</li>
          <li className="text-base font-normal leading-normal">News</li>

          <button className="w-[132px] h-[42px] bg-[#D80027] rounded-md"> Contact Us</button>
        
        </ul>

       
      </div>
    </nav>
  );
};

export default Navbar;
