"use client";
import React, { useState } from "react";

import hamburgerMenu from "../../public/svg/hamburger-menu.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="bg-[#070320] top-0 left-0 text-white w-full h-[70px] lg:px-[60px] flex items-center justify-between">
        <h1 className="lg:text-[29px] text-[24px] font-bold">Battle-blitz</h1>
        
        <ul className="md:flex list-none lg:gap-[88px] gap-[60px] items-center hidden">
          <li className="text-base font-normal leading-normal">Home</li>

          <li className="text-base font-normal leading-normal ">AboutUs</li>
          <li className="text-base font-normal leading-normal">Portfolio</li>
          <li className="text-base font-normal leading-normal">News</li>

          <button className="w-[132px] h-[42px] bg-[#D80027] rounded-md">
            {" "}
            Contact Us
          </button>
        </ul>
      


      <div
        onClick={handleToggle}
        className="block w-[30px] bg-slate-400 h-[30px] md:hidden">
          
        <Image src={hamburgerMenu} fill alt="hamburgerMenu" />
      </div>

      <div
        className={
          isExpanded
            ? "absolute left-0 top-0 z-10 mx-auto mt-[73px] flex h-max w-full flex-col bg-[#070320] text-xl leading-normal ease-in-out md:hidden"
            : " absolute left-[-100%] bg-green-500 "
        }
      >
        <ul
          onClick={handleToggle}
          className="p-inline-start-[40px] w-full h-screen md:hidden ">
            <li className='w-fit text-base font-medium py-[12px] px-[13px]'><Link href="/">Home </Link></li>
            <li className='w-fit text-base font-medium py-[12px] px-[13px]'><Link href="/">AboutUs </Link></li>
            <li className='w-fit text-base font-medium py-[12px] px-[13px]'><Link href="/">Portfolio</Link></li>
            <li className='w-fit text-base font-medium py-[12px] px-[13px]'><Link href="/">News</Link></li>
            <button className="w-fit  py-[12px] px-[13px] bg-[#D80027] rounded-md">
            {" "}
            Contact Us
          </button>
          </ul>
      </div>

    </nav>
  );
};

export default Navbar;
